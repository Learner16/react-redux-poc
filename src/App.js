import React from 'react';
import './App.css';
import CustomButton from './customButton/index';
import WebCamera from './webCamera/index';

const App = () => (
  <div className="App">
    <p> Task1: The state of the button is </p>
    <CustomButton />
    <p> Task 2: Access the web Camera: </p>
    <WebCamera />
  </div>
);

export default App;
