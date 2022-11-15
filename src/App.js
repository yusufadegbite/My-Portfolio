import React from 'react';
import './App.css';
import About from './components/About/About';
import Navbar from './components/Nav/Navbar';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Projects from './components/Projects/project';

function App() {

  return (
    <div className="App">

      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
