import React from "react";
import Landing from "../components/about/Landing";
import Showreel from "../components/about/Showreel";
import AboutEntangle from "../components/about/AboutEntangle";
import PageTransition from "../components/PageTransition";
import ScrollToTop from "../components/ScrollToTop";
import Teams from "../components/about/Teams";

function About() {
  return (
    <PageTransition>
      <ScrollToTop />
      <Landing />
      <Showreel />
      <AboutEntangle />
      <Teams />
    </PageTransition>
  );
}

export default About;
