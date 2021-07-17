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

    return (
        <div>Current location: Latitude: {infoLocation.lat} Longintud:  {infoLocation.lng}  </div>
    );
}
export default GetLocation;