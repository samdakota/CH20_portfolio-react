import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
        <Nav></Nav>
        <main>      
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </main>
    </div>
  );
}

export default App;