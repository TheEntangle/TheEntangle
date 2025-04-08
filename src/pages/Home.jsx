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

function Home() {
  return (
    <>
      <Landing />
      <AboutEntangle />
      <Showcase />
      <TheEdge />
      <Working />
      <ServiceSec />
      <Gallary />
      <Portfolio />
      <TheEdge />
      <Faq />
      <BookApointment />
      <Footer /> 
    </>
  );
}

export default Home;
