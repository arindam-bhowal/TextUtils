// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  

  function toggleMode(){
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(61 60 64)';
      showAlert('Dark Mode Enabled!!', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Dark Mode Disabled!!', 'success');
    }
    console.log(mode);
  }
    

  const showAlert = (message, type)=>{
    setAlert({
    msg: message,
    Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
    }
    

  return (
    <>
      <Navbar title="Arindam" appName="TextUtils" displayMode={mode} toggleMode={toggleMode} mode={mode}/>
      {/* <Navbar appName="TextUtils" /> */}

      <Alert alertMsg={alert}/>
      <TextForm showAlert={showAlert} Heading='Enter the text to Analyze below' mode={mode}/>
    </>
  );
}

export default App;