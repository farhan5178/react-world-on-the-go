// function Countries (){
//     return (
//         <div>

//         </div>
//     )
// }
// // 
// const Countries =()=>{
//     return()
// }
import Country from '../Country/Country';

import React, { use, useState } from 'react';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries]=useState([])
   //eikhane visited flag er state ta alada kore rakha jabe
    const [visitedFlags,setVisitedFlags]=useState([])
    const handleVisitedCountries=(country)=>{
        console.log('HandlevIs',country)
        const newVisitedCountries =[...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)

    }
    // 
    const handleVisitedFlag=(flag)=>{
         console.log('Flag Need To Added',flag)
         const newVisitedFlags=[...visitedFlags,flag]
         setVisitedFlags(newVisitedFlags);
    }
    const countriesData =use(countriesPromise)
    const countries=countriesData.countries;
    console.log(countries)
    return (
        <div >
            <h1> in the countries: {countries.length}</h1>
            <h3> Total Visited:{visitedCountries.length}</h3>
            <h3> Total Flags visited :{visitedFlags.length}</h3>
             <ol>
<div className='visited-flags-container'>
    {
        visitedFlags.map((flag,index) => <img key={index} src={flag} alt="" />)
    }
</div>

               {
               
                 visitedCountries.map(country=> 
                 
                 <li
                  key={country.cca3.cca3}>
                    
                    {country.name.common}</li>)
            }
            </ol>
            <div className='countries'>
                {
                countries.map(country=><Country 
                    key={country.cca3.cca3}
                    country ={country}
                    
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    >
                    </Country>) 
            }
            </div>
           
        </div>
    );
};

export default Countries;



// inline css (style object)
// 