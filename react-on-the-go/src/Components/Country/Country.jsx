import React, { useState } from 'react';
import "./country.css";

const Country = ({ country,handleVisitedCountries }) => {
  
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country); 
    };

    return (
        <div className='country'>
           
            <img src={country.flags.flags.png} alt={country.name.common} />
            
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            
       
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not visit'}
            </button>
            
   
       
        </div>
    );
};

export default Country;