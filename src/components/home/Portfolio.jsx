import React, { useState, useEffect } from "react";
import styles from "../../styles/home/Portfolio.module.css";

import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";

import supabase from "../../utils/supabase";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjectsData() {
      const { data, error } = await supabase
        .from("projects")
        .select()
        .eq("category", "Coding and Development")
        .order("project_date", { ascending: false }) // Get latest projects first
        .limit(4); // Limit to 4 projects

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
    }
    getProjectsData();
  }, []);

  return (
    <section className={styles.portfolio_section}>
      <div className={styles.portfolio_section_div}>
        <div className={styles.head_ctr}>
          <div
            className={`${styles.element_details_ctr_left} ${styles.element_details_ctr}`}
          >
            <img
              className={`${styles.element_details_left_img} ${styles.element_details_img}`}
              src={element_details}
              alt=""
            />
          </div>
          <div className={styles.head_content_ctr}>
            <JellyTag title="Portfolio" />
            <h1 className={styles.heading}>
              Our Selected Projects <br />
              <span>That Propel Possibilities.</span>
            </h1>

            <p className={styles.paragraph}>
              Bringing bold concepts to life through purposeful design,
              development, and innovation.
            </p>
            <PrimaryBtn path="/portfolio" title="View Portfolio" />
          </div>
          <div
            className={`${styles.element_details_ctr_right} ${styles.element_details_ctr}`}
          >
            <img
              className={`${styles.element_details_right_img} ${styles.element_details_img}`}
              src={element_details}
              alt=""
            />
          </div>
        </div>

        <div className={styles.project_cards_ctr}>
          {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className={styles.no_projects}>No projects available</p>
        )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
