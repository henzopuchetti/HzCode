import React from 'react';
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';

const App = () => {
  return(
    <>
      <Navbar />
      <div className="container">
        <section id="hero">
        <Hero />
        </section>
        <section id="workexperience">
        <WorkExperience />
        </section>
        <section id="contactme">
        <ContactMe />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;