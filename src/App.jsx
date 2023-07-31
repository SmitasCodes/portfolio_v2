import React from "react";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Landing />
      <NavBar/>
      <About/>
    </div>
  );
}

export default App;
