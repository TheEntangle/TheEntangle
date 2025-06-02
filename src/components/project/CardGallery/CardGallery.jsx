import React from 'react';
import styles from './CardGallery.module.css'; // ✅ Correct


const projects = [
    {
        title: "Raven Studio",
        year: 2025,
        tag: "Business",
        image: "https://framerusercontent.com/images/oITRaXEkBVhukMYINXV2xi05PY.jpg", // Replace with your actual image path
    },
    {
        title: "White Stag",
        year: 2024,
        tag: null,
        image: "https://framerusercontent.com/images/R3IeKTraEFrwLqAUS320AzD0uY.jpg", // Replace with your actual image path
    }
];

const CardGallery = () => {
    return (
        <div className={styles.mainGalleryContainer}>
            <div className={styles.moreViews}>
                <h2 className={styles.titleMoreview}>More Other Cases</h2>
                <span className={styles.moreViewButton}>View more works</span>
            </div>
            <div className={styles.galleryContainer}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.cardHolder}>
                        <div className={styles.card} key={index}>
                            <img src={project.image} alt={project.title} className={styles.cardImage} />
                            {project.tag && <span className={styles.tag}>{project.tag}</span>}
                            <div className={styles.cardFooter}>
                                <span className={styles.title}>{project.title}</span>
                                <span className={styles.year}>{project.year}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CardGallery;