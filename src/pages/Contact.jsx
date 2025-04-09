import React from "react";
import Landing from "../components/contact/Landing";
import Form from "../components/contact/Form";
import Faq from "../components/Faq";
import TheEdge from "../components/TheEdge";
import BookApointment from "../components/BookApointment";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Landing />
      <Form />
      <TheEdge />
      <Faq />
      <BookApointment />
      <Footer />
    </>
  );
}

export default Contact;
