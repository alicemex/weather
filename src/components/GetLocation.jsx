import React, {useState, useEffect} from 'react';


const GetLocation = () =>{


    const [infoLocation, setInfoLocation] = useState({lat:0, lng:0});

const dataLocationReturned = ()=>{
    navigator.geolocation.getCurrentPosition(position => {
        //const { latitude, longitude } = position.coords;
        // Show a map centered at latitude / longitude.
        setInfoLocation({lat:position.coords.latitude, lng:position.coords.longitude});
      });
}
useEffect(()=>{
    dataLocationReturned(infoLocation,setInfoLocation);
},[]);
var lat = infoLocation.lat;
var lng = infoLocation.lng;
    return (
        <div>Current location: Latitude: {lat} Longintud:  {lng}  </div>
    );
}
export default GetLocation;