import React, {useState } from 'react'
const Header = ()=> {
    const [darkMode, setDarkMode] = useState(true);

    const handleClick = () =>{
        setDarkMode(!darkMode);
    }
    return(
        <div className="Header">
           
            
        <button type="button" onClick={handleClick}> {darkMode ? 'Darkmode': 'LightMode'} </button>
        </div> 
    );
}

export default Header;