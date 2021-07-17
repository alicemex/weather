import React, {useState, useEffect} from 'react';

const Characters = () =>{
    
    const[infoCity, setInfoCity] = useState([]);
    const[englishUnits, setEnglishUnits] = useState([true]);
   
    useEffect(()=>{
        fetch('https://api.weatherapi.com/v1/current.json?key=093aeef86e954c19abd12149210207&q=London&aqi=yes')
        .then(response => response.json())
        .then(data=> setInfoCity(data))
        
    
    },
    []);
    const changeUnits = ()=>{
        setEnglishUnits(!englishUnits);
    }

    return(

        <div className="infoCity">
             <h1>Weather Alice's APP</h1>
             <h3>City: {(infoCity.location.name)}</h3>
                <h3> Temp: {englishUnits ? `${infoCity.current.temp_c} °C`: ` ${infoCity.current.temp_f} °F`} </h3>
                <button onClick={changeUnits}>Change Units</button>
        </div>
    );
}

export default Characters;