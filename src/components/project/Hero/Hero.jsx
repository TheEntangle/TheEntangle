import React from 'react'
import './Hero.css'; // Assuming you have a CSS file for styling

function Hero() {
  return (
    <div className="portfolio-container">
      <div className="background-overlay">
        <div className="geometric-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
      
      <div className="content-wrapper">
        <div className="main-content">
          <div className="date-badge">
            <span className="date-label">DATE</span>
            <span className="date-value">16/09/2024</span>
          </div>
          
          <h1 className="studio-title">
            Way Fields Studios
          </h1>
          
          <p className="studio-description">
            Way Field Studios is a cutting-edge creative agency that brings 
            innovative designs and strategic solutions to life.
          </p>
          
          <div className="navigation-tabs">
            <button className="nav-tab active">E-Commerce</button>
            <button className="nav-tab">Portfolio</button>
          </div>
        </div>
        
        <div className="project-info ">
            <img  className='card-image' src="/image1.png" alt="" />
          <div className="info-section">
            <h3 className="info-title">Services</h3>
            <p className="info-text">Web design & Web development</p>
          </div>
          
          <div className="info-section">
            <h3 className="info-title">Category</h3>
            <p className="info-text">Artist E-Commerce Portfolio</p>
          </div>
          
          <div className="info-section">
            <h3 className="info-title">Client</h3>
            <p className="info-text">Marco S Pentaclay</p>
          </div>
          <div className='button-container'>
            <button className="view-website-btn">
            View Live Website
          </button>
          <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero