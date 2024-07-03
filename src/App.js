import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <h1 className='dash'>Dashboard</h1>
      <div className="header-box">
        <Header />
      </div>
      
      <div className="container">
        
        <MainContent />
      </div>
    </div>
  );
}

export default App;
