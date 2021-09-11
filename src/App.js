// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);



  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b216b';
      showAlert('Dark Mode Enabled!!', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark Mode Disabled!!', 'success');
    }
    // console.log(mode);
  }

  // setInterval(() => {
  //   document.title='TextUtils is the best';
  // }, 2000);
  // setInterval(() => {
  //   document.title='install now';
  // }, 1100);


  const showAlert = (message, type) => {
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
      {/* <Navbar appName="TextUtils" /> */}
      <Router>
        <Navbar title="Arindam" appName="TextUtils" displayMode={mode} toggleMode={toggleMode} mode={mode} />
        <Alert alertMsg={alert} />

        <Switch>
          <Route exact path="/About">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} Heading='Enter the text to Analyze below' mode={mode} />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;