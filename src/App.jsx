import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Expereince from "./components/Expereince";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hiden text-stone-300 antialiased">
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <Technologies />
        <Expereince />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default App;
