import React, {useState, useEffect} from 'react';
// import GetLocation from '../components/GetLocation.jsx'
const GetTemp = () =>{
   
    /*variable de estado para hacer get a la cordenadas*/
    const [infoLocation, setInfoLocation] = useState({lat:0, lng:0});
    /*para recibir datos de la api del weater*/
    const[infoCity, setInfoCity] = useState({current:"marcia"});
    /*cambiar unidades*/
    const[englishUnits, setEnglishUnits] = useState([true]);

    /*cambiar el fondo si es de noche o de dia*/
    const[isDay, setBackground] = useState(-1);

    navigator.geolocation.getCurrentPosition(position => {
        setInfoLocation({lat:position.coords.latitude,lng:position.coords.longitude});
    });
    var lat = infoLocation.lat;
    var lng = infoLocation.lng;
  useEffect( ()=>{
        const log = async () => {
            const url = `https://api.weatherapi.com/v1/current.json?key=093aeef86e954c19abd12149210207&q=${lat},${lng}&aqi=yes`;
            const weatherD  = await fetch(url).then((response)=>response.json());  
            setInfoCity(weatherD);       
            
        }
        
        log();
        changeBackground();
    },
    []);

    const changeUnits = ()=>{
        setEnglishUnits(!englishUnits);
    }

    const changeBackground = ()=>{
       setBackground(infoCity.current.is_day);
    }
   

   
    return(
        <div className="infoCity ">
              <h1>Weather </h1>         
              <h2>City: {(infoCity.location.region)}, {(infoCity.location.country)}</h2>
                <h3> Temp: {englishUnits ? `${infoCity.current.temp_c} °C`: ` ${infoCity.current.temp_f} °F`} </h3>  
                
                <h3> <img src={(infoCity.current.condition).icon} alt="icono" /></h3>
                <h2>{(infoCity.current.condition).text} </h2>
                <div>{isDay ? "Es de día" : `<h3>Es de noche</h3>`} </div>
                <button onClick={changeUnits}>Change Units</button>
                {/* <GetLocation> </GetLocation>  */}
        </div>
    );
}
export default GetTemp;