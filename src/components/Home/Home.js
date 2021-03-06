import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [counTries,setCountry] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    },[])
    // console.log(countries);
    const countries = counTries.slice(0,50);
    // console.log(countries);
    return (
        <div className="container">
            <h3 className="text-center text-primary mt-5">Countries: {countries.length} </h3>
            <div className="row">
                {
                    countries.map(country => <Country country={country} key={country.numericCode} />)
                }
            </div>
        </div>
    );
};

export default Home;