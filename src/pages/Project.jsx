import React from "react";
import Faq from "../components/Faq";
import BookApointment from "../components/BookApointment";
import Footer from "../components/Footer";
import Landing from "../components/project/Landing";
import Thumbnail from "../components/project/Thumbnail";
import AboutProject from "../components/project/AboutProject";

function Project() {
  return (
    <>
      <Landing />
      <Thumbnail />
      <AboutProject />
      <Faq />
      <BookApointment />
      <Footer />
    </>
  );
}

export default Project;
