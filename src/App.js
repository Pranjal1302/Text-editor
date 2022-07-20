import './App.css';
import Block from './components/Block';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

function App() {

  // ---------------------------dark mode---------------------------------------------------------//
  const [map, setmap] = useState('Enable dark mode');
  const [mode, setmode] = useState('light');
  let changemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.Color = 'white';
      setmap('Disable Dark mode');
      showalert('Darkmode has been enabled', 'success');
    }
    else {
      document.body.style.backgroundColor = 'white';
      document.body.style.Color = 'black';
      setmode('light');
      setmap('Enable Dark mode');
      showalert('Darkmode has been disbled', 'success');
    }
  }
  //------------------------------------------dark mode---------------------------------------------//
  // ---------------------------alert---------------------------------------------------------//
  const [alerts, setalerts] = useState(null)
  const showalert = (message, type) => {
    setalerts({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalerts(null)
    }, 2000);
  }

  //------------------------------------------alert---------------------------------------------//
  return (
    <>
      <Router>
        <Navbar title="Text Converter" mode={mode} changemode={changemode} map={map} />
        <Alert alerts={alerts} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<Block heading="Text Converter" showalert={showalert} mode={mode} changemode={changemode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
