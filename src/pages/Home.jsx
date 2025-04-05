import React from "react";
import Landing from "../components/home/Landing";
import AboutEntangle from "../components/home/AboutEntangle";
import Showcase from "../components/home/Showcase";
import Working from "../components/home/Working";
import TheEdge from "../components/TheEdge";
import Portfolio from "../components/home/Portfolio";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Landing />
      <AboutEntangle />
      <Showcase />
      <TheEdge />
      <Working />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Home;
