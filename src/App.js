import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { initialData } from './api.js';
import MainPage from './MainPage.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage data={initialData} />
      </div>
    );
  }
}

export default App;
