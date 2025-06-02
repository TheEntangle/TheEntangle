import React from 'react'
import './Analysis.css';

function Analysis() {
  return (
    <div className="performance-container">
      <div className="image-container">
        <img src="https://framerusercontent.com/images/6igmB60fniZZ2g62iKIWQ848llo.jpg" alt="Watch on stand" className="watch-image" />
      </div>

      <div className="text-container">
        <h2 className="title">Analysis - Performance and Responsiveness</h2>
        <p className="description">
          We prioritize optimal performance and responsive responsiveness across all devices. Our approach ensures fast loading times and smooth navigation, providing an unmatched user experience on both desktop and mobile.
        </p>

        <div className="section">
          <h3 className="subtitle">Performance <span>SEO</span></h3>
          <ul className="feature-list">
            <li><span className="highlight">Fast Loading Speed:</span> We optimize images, scripts, and animations to ensure quick load times.</li>
            <li><span className="highlight">Optimized Code:</span> Clean and efficient coding practices are employed to reduce unnecessary elements.</li>
            <li><span className="highlight">Scalability:</span> Our performance-focused design ensures you can handle increased traffic.</li>
          </ul>
        </div>

        <div className="section">
          <h3 className="subtitle">Responsiveness</h3>
          <p className="description">
            Responsiveness is key to delivering an exceptional user experience across all devices. We ensure that your website adjusts seamlessly to different screen sizes, from desktops to smartphones, providing a consistent and intuitive interaction. With fast load times and optimized navigation, users will enjoy smooth interactions no matter how they access your site.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Analysis