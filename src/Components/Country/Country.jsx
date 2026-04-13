import React, { useState } from 'react';
import './Country.css'
// function Country (){
//destucturing props
const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
    const [visited,setVisited]=useState(false);
    // console.log(country.name.common)
    const handleVisited=()=>{
        // using normal if else condition 
    //    if(visited){
    //     setVisited(false)
    //    }else{
    //         setVisited(true)
    //     }
    // setVisited(visited? false :true) //using tarnary operator
    // logical operator 
    setVisited(!visited) //togol 
    handleVisitedCountries(country)

    }
    return (
        <div className={`country  ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name:{country.name.common}</h2>
            <p>Population :{country.population.population}</p>
            {/* Conditional randaring korbo */}
            <p>Area:{country.area.area} {country.area.area>300000 ? "Big Country": "small Country"}</p>

            <button className='btn' onClick={handleVisited}> 
                {visited ? 'visited' :'Not Visited'}
            </button>

            <button onClick={() =>handleVisitedFlag(country.flags.flags.png)} className='btn'>Add Visited Flag </button>
        </div>
    );
};

export default Country;