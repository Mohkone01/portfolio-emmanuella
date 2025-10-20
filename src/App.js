import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Engagement from './components/Engagement';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Project />
      <Engagement />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
