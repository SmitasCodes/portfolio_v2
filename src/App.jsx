import React from "react";
import Landing from "./sections/Landing";
import NavBar from "./components/Navbar/NavBar";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Landing />
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
