import './App.css';

import GetTemp from './components/GetTemp.jsx'
import GetLocation from './components/GetLocation.jsx'



function App() {

   

    return ( 
       <div className="Background">
            <div className ="Container">
          
             <GetTemp></GetTemp>
             <GetLocation></GetLocation>
               
        </div>     
       </div>
        );
    }

    export default App;