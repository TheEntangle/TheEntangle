import React from "react";
import styles from "../../styles/project/AboutProject.module.css";

function AboutProject() {
  return (
    <section className={styles.project_details_section}>
      <div className={styles.project_details_content_ctr}>
        <h2 className={styles.heading}>
          Analysis - Performance and Responsiveness
        </h2>
        <div className={styles.seperator}></div>
        <p className={styles.paragraph}>
          We prioritize optimal performance and seamless responsiveness across
          all devices. Our approach ensures fast loading times and smooth
          navigation, providing an excellent user experience on both desktop and
          mobile.
        </p>
        <h2 className={styles.heading}>Performance</h2>
        <div className={styles.seperator}></div>
        <p className={styles.paragraph}>
          • Fast Loading Speed: We optimize images, scripts, and resources to
          ensure quick load times. • Optimized Code: Clean and efficient coding
          practices are employed to reduce unnecessary elements. •
          Scalability:Our performance-focused design ensures your website can
          handle increased traffic.
        </p>
      </div>
      <div className={styles.project_images_ctr}>
        <div className={styles.image_scroller}>
          <img
            src="https://cscyurwvfnkhzbmupqum.supabase.co/storage/v1/object/public/projects/projectImages/fenton_website_ui.webp"
            alt="Performance Optimization"
            className={styles.project_image}
          />
          <img
            src="https://cscyurwvfnkhzbmupqum.supabase.co/storage/v1/object/public/projects/projectImages/fenton_home.webp"
            alt="Performance Optimization"
            className={styles.project_image}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
