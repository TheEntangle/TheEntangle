import React from "react";
import Landing from "../components/portfolio/Landing";
import Projects from "../components/portfolio/Projects";
import TheEdge from "../components/TheEdge";
import BookApointment from "../components/BookApointment";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import ScrollToTop from "../components/ScrollToTop";

function Portfolio() {
  return (
    <PageTransition>
      <ScrollToTop />
      <Landing />
      <Projects />
      <TheEdge />
      <BookApointment />
      <Footer />
    </PageTransition>
  );
}

export default Portfolio;
