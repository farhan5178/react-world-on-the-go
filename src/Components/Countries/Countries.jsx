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

import React, { use } from 'react';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countriesData =use(countriesPromise)
    const countries=countriesData.countries;
    console.log(countries)
    return (
        <div >
            <h1> in the countries: {countries.length}</h1>
            <div className='countries'>
                {
                countries.map(country=><Country 
                    key={country.cca3.cca3}
                    country ={country}></Country>) 
            }
            </div>
           
        </div>
    );
};

export default Countries;



// inline css (style object)
// 