import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./countries.css"

const Countries = ({ CountriesPromise }) => {
    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries;

  
    const [visitedCountries, setVisitedCountries] = useState([]);

    
   const handleVisitedCountries = (country) => {
    // Check if the country is already in our list
    const isAlreadyVisited = visitedCountries.find(c => c.cca3 === country.cca3);

    if (isAlreadyVisited) {
        // REMOVE: Filter out the country that matches this ID
        const remaining = visitedCountries.filter(c => c.cca3 !== country.cca3);
        setVisitedCountries(remaining);
    } else {
        // ADD: Keep existing countries and add the new one
        setVisitedCountries([...visitedCountries, country]);
    }
};
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            
            
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {visitedCountries.map(c => <li key={c.cca3}>{c.name.common}</li>)}
                </ul>
            </div>

            <div className='countries'>
                {
                    countries.map(country => (
                        <Country 
                            key={country.cca3} 
                            country={country} 
                           
                            handleVisitedCountries={handleVisitedCountries} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;