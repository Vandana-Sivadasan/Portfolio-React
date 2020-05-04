import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
        {/* Page Content goes here */}
        <h1>Vandana</h1>
      <Footer/>
    </div>
  );
}

export default App;
