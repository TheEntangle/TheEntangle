import React from "react";
import Landing from "../components/contact/Landing";
import Form from "../components/contact/Form";
import Faq from "../components/Faq";
import TheEdge from "../components/TheEdge";
import BookApointment from "../components/BookApointment";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import ScrollToTop from "../components/ScrollToTop";

function Contact() {
  return (
    <PageTransition>
      <ScrollToTop />
      <Landing />
      <Form />
      <TheEdge />
      <Faq />
      <BookApointment />
      <Footer />
    </PageTransition>
  );
}

export default Contact;
