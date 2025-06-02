import React from 'react'
import Hero from "../components/project/Hero/Hero"
import Analysis from '../components/project/Analysis/Analysis'
import Problems from '../components/project/Problems/Problems'
import Solution from '../components/project/Solution/Solution'
import CardGallery from '../components/project/CardGallery/CardGallery'
import Faq from '../components/Faq'
import BookApointment from '../components/BookApointment'
import Footer from '../components/Footer'

function Project() {
  return (
    <>
        <Hero/>
        <Analysis/>
        <Problems/>
        <Solution/>
        <CardGallery/>
        <Faq/>
        <BookApointment/>
        <Footer />
    </>
  )
}

export default Project