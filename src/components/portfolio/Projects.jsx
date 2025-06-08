import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "../../styles/portfolio/Projects.module.css";
import ProjectCard from "./ProjectCard";
import supabase from "../../utils/supabase";

const categories = [
  "All Projects",
  "Coding and Development",
  "Graphic Design",
  "Video Editing",
];

const PROJECTS_PER_BATCH = 6; // Load 6 projects at a time

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]); // Projects currently displayed
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMoreProjects, setHasMoreProjects] = useState(true); // Track if there are more projects to load
  const observer = useRef(null);

  // Fetch all projects from Supabase
  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select()
        .order("project_date", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  // Filter projects based on category and check if there are more to load
  useEffect(() => {
    const filtered =
      activeCategory === "All Projects"
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    setVisibleProjects(filtered.slice(0, PROJECTS_PER_BATCH)); // Show first batch
    setHasMoreProjects(filtered.length > PROJECTS_PER_BATCH); // Check if there are more projects
  }, [activeCategory, projects]);

  // Load more projects when the user scrolls to the bottom
  const loadMoreProjects = useCallback(() => {
    if (loadingMore || !hasMoreProjects) return; // Prevent multiple calls and stop if no more projects

    setLoadingMore(true);
    setTimeout(() => {
      const currentCount = visibleProjects.length;
      const filtered =
        activeCategory === "All Projects"
          ? projects
          : projects.filter((project) => project.category === activeCategory);

      const newProjects = filtered.slice(
        currentCount,
        currentCount + PROJECTS_PER_BATCH
      );

      if (newProjects.length > 0) {
        setVisibleProjects((prev) => [...prev, ...newProjects]);
        // Check if there are more projects after this batch
        setHasMoreProjects(currentCount + newProjects.length < filtered.length);
      } else {
        setHasMoreProjects(false);
      }

      setLoadingMore(false);
    }, 1000); // Simulate network delay
  }, [activeCategory, projects, visibleProjects, loadingMore, hasMoreProjects]);

  // Intersection Observer to detect when the user reaches the bottom
  const lastProjectRef = useCallback(
    (node) => {
      if (loading || loadingMore || !hasMoreProjects) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreProjects();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, loadingMore, hasMoreProjects, loadMoreProjects]
  );

  return (
    <section className={styles.project_section}>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className={styles.cards_ctr}>
          {visibleProjects.length > 0 ? (
            <>
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {/* Invisible trigger element for intersection observer */}
              {hasMoreProjects && (
                <div
                  ref={lastProjectRef}
                  style={{ height: "1px", width: "100%" }}
                />
              )}
            </>
          ) : (
            <p>No projects available</p>
          )}
          {loadingMore && <p>Loading more projects...</p>}
        </div>
      )}
    </section>
  );
}

export default Projects;
