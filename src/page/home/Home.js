import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Projects from "../../components/allProjects/Projects";
import Services from "../../components/allServices/Services";
import Experience from "../../components/experience/Experience";
import Contact from "../../components/contact/Contact";
import Languages from "../../components/languages/Languages";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Languages />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
