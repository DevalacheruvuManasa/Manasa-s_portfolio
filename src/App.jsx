import React from 'react';
import './App.css'; 
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="main-content">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
        </div>
        <Footer />
      </main>
    </>
  );
}
export default App;