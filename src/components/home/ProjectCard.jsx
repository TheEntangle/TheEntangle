import React from "react";
import styles from "../../styles/home/ProjectCard.module.css";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className={styles.project_card}>
      <img
        className={styles.project_img}
        src={project.thumbnail}
        alt={project.heading}
      />
      <div className={styles.content_ctr}>
        <div className={styles.left_content_ctr}>
          <span className={styles.project_title}>{project.heading}</span>
          <span className={styles.dot}></span>
          <span className={styles.project_date}>
            {project.project_date.split("-")[0]}
          </span>
        </div>
        <div className={styles.right_content_ctr}>
          {project.tags &&
            project.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className={styles.project_tag}>
                {tag}
              </span>
            ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
