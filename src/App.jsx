import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './assets/components/Home.jsx';
import Register from "./assets/components/Register";


function App() {
  return (
    <div className="App-Container">
      <h1 style={{ backgroundColor: "orange" }}>MERN Frontend</h1>
      {/* <Home age={10} /> */}
      
      <div className="registration-section">
        <Register />
      </div>

      <h3>This is footer</h3>
    </div>
  );
}

export default App;
