import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTest from "./components/ScrollTest";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header/>
        {/* Page Content goes here 
        <h1>Vandana</h1>
      <Footer/> */}
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
