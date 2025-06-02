import React from 'react'
import "./Problems.css"

function Problems() {
  return (
    <div className="site-improvement-container">
      <div className="images-section">
        <div className="image-box">
          <img src="https://framerusercontent.com/images/wIkfS2B4PLN8e56l2tauOjIs4.jpg" alt="Watch 1" className="watch-image" />
        </div>
        <div className="image-box">
          <img src="https://framerusercontent.com/images/EnDwPLRTX3We8xhTEDKAWKPM.png" alt="Watch 2" className="watch-image" />
        </div>
      </div>

      <div className="text-section">
        <h2>Problem – Site and Service Improvement</h2>
        <p>
          Identifying and addressing areas for improvement is essential to maintaining a high-quality user experience. Whether it’s optimizing site speed, enhancing service offerings, or refining design elements, continuous improvement is key.
        </p>

        <h3>
          Site and Service Improvement <span className="seo-tag">SEO</span>
        </h3>
        <p>
          To stay ahead in a competitive market, it’s vital to constantly assess and improve your website and services. We dive deep into performance analytics, user behavior, and customer feedback to uncover pain points and areas for enhancement. From optimizing load times and refining user interfaces to improving service features and functionality.
        </p>
      </div>
    </div>
  )
}

export default Problems