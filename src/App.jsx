import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Objectives from "./components/Objectives";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Objectives />
      <Footer />
    </>
  );
}
