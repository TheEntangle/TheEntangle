import React from "react";
import Landing from "../components/about/Landing";
import Showreel from "../components/about/Showreel";
import AboutEntangle from "../components/about/AboutEntangle";
import PageTransition from "../components/PageTransition";

function About() {
  return (
    <PageTransition>
      <Landing />
      <Showreel />
      <AboutEntangle />
    </PageTransition>
  );
}

export default About;
