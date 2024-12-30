import './App.css';
import Data from "./Components/CaseChanger"
import { Switch as MuiSwitch } from '@mui/material';
import { useState } from 'react';
import About from './Components/About'
import Alerts from './Components/AlertingMsg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (type,message)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(()=>{
      setAlert(null)    
    },1500)
  }
  
  const [mode, setMode] = useState({
          color:"black",
          background:"white"
          
      })
      const [modetext, setModetext] = useState("Enable Dark Mode")

      const togglemode = ()=>{
          if (mode.color === "black"){
              setMode({color:"white",
                  background:"black",
                  
                })
                // document.title = "TextUtils-DarkMode"
              showAlert("success","Dark Mode Enable")
              setModetext(("Enable Light Mode"))
          }
          else{
              setMode({color:"black",
                  background:"white",})
                  // document.title = "TextUtils-LightMode"
              setModetext(("Enable Dark Mode"))
              showAlert("success","Light Mode Enable")
          }
      }
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (

    <Router>
    <div className='h-screen w-screen' style={mode}>
      <div className='text-right pr-4 pt-4' style={mode}>
      <MuiSwitch className='border-gray-400 border-2 rounded-3xl' onClick={togglemode} {...label}  color="default"/>
      </div>
      <div className='mt-4'><Alerts alert={alert}/></div>
      
      {/* <Data mode={mode} modetext={modetext} togglemode={togglemode} showAlert={showAlert}/> */}
      <Routes>
    <Route path="/about" element={<About />}>
    </Route>
    <Route path="/" element={< Data mode={mode} modetext={modetext} togglemode={togglemode} showAlert={showAlert}/>}>
    </Route>
  </Routes>
    </div>
    </Router>


  );
}

export default App;
