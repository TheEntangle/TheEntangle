import React, { forwardRef } from "react";
import styles from "../../styles/portfolio/ProjectCard.module.css";
import { Link } from "react-router-dom";

const ProjectCard = forwardRef(({ project }, ref) => {
  return (
    <Link ref={ref} to={`/project/${project.id}`} className={styles.card}>
      <div className={styles.image_ctr}>
        <img
          className={styles.image}
          src={project.thumbnail}
          alt={project.heading}
        />
      </div>
      <div className={styles.content_ctr}>
        <span className={styles.title}>{project.heading}</span>
        <span className={styles.date}>
          {project.project_date.split("-")[0]}
        </span>
      </div>
      <div className={styles.tag}>
        {project.tags &&
          project.tags
            .slice(0, 1)
            .map((tag, index) => <span key={index}>{tag}</span>)}
      </div>
    </Link>
  );
});

export default ProjectCard;
