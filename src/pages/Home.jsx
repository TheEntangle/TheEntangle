import React from "react";
import Landing from "../components/home/Landing";
import AboutEntangle from "../components/home/AboutEntangle";
import Showcase from "../components/home/Showcase";
import Working from "../components/home/Working";
import TheEdge from "../components/TheEdge";
import Portfolio from "../components/home/Portfolio";
import Footer from "../components/Footer";
import BookApointment from "../components/BookApointment";
import Faq from "../components/Faq";
import ServiceSec from "../components/home/ServiceSec";
import Gallary from "../components/home/Gallary";
import PageTransition from "../components/PageTransition";

function Home() {
  return (
    <PageTransition>
      <Landing />
      <ServiceSec />
      <Portfolio />
      {/* <Showcase /> */}
      
      <TheEdge />
      <Working />
      
      {/* <Gallary /> */}
      
      <TheEdge />
      <Faq />
      <AboutEntangle />
      <BookApointment />
      <Footer />
    </PageTransition>
  );
}

export default Home;
