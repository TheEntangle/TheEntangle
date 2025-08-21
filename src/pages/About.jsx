import React from "react";
import Landing from "../components/about/Landing";
import Showreel from "../components/about/Showreel";
import AboutEntangle from "../components/about/AboutEntangle";
import PageTransition from "../components/PageTransition";
import ScrollToTop from "../components/ScrollToTop";
import Teams from "../components/about/Teams";
import TheEdge from '../components/TheEdge';
import Awards from '../components/about/Awards';
import ServiceSec from '../components/home/ServiceSec';
import Faq from '../components/Faq';
import Footer from "../components/Footer";

function About() {
  return (
    <PageTransition>
      <ScrollToTop />
      <Landing />
      <Showreel />
      <AboutEntangle />
      <Teams />
      <TheEdge />
      <Awards />
      <ServiceSec />
      <Faq />
      <Footer />
    </PageTransition>
  );
}

export default About;
