import React from "react";
import Landing from "./pages/Landing";
import NavBar from "./components/Navbar/NavBar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Landing />
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
