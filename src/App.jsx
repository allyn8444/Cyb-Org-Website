import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

// TODO:
// - Add colors
// - Change font
export default function App() {
  return (
    <>
      <Nav />
      <section className="">
        <Hero />
      </section>
    </>
  );
}
