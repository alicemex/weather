import React, {useState, useEffect} from 'react';
import GetLocation from '../components/GetLocation.jsx'
const GetTemp = () =>{
    
    const[infoCity, setInfoCity] = useState({current:"marcia"});
    const[englishUnits, setEnglishUnits] = useState([true]);
   
  useEffect( ()=>{
        const log = async () => {
            const url = "https://api.weatherapi.com/v1/current.json?key=093aeef86e954c19abd12149210207&q=London&aqi=yes";
        const weatherD  = await fetch(url).then((response)=>response.json());  
          setInfoCity(weatherD);
          console.log(lat);
        }
        log();
       // return value.json();
    },
    []);

    const changeUnits = ()=>{
        setEnglishUnits(!englishUnits);
    }
    return(
        <div className="infoCity">
              <h1>Weather</h1>         
               <h3>City: {(infoCity.location.name)}</h3>
                <h3> Temp: {englishUnits ? `${infoCity.current.temp_c} °C`: ` ${infoCity.current.temp_f} °F`} </h3>
                <button onClick={changeUnits}>Change Units</button>
               <div><br></br><br></br></div>
                <GetLocation></GetLocation> 
        </div>
    );
}
export default GetTemp;