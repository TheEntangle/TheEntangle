import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import styles from "../../styles/portfolio/Projects.module.css";
import ProjectCard from "./ProjectCard";
import supabase from "../../utils/supabase";

const categories = [
  "All Projects",
  "Coding and Development",
  "Graphic Design",
  "Video Editing",
];

const PROJECTS_PER_BATCH = 6;

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_BATCH);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const observer = useRef(null);

  // Fetch projects once on mount
  useEffect(() => {
    let isMounted = true;

    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select()
          .order("project_date", { ascending: false });

        if (error) throw error;

        if (isMounted) {
          setProjects(data || []);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        if (isMounted) {
          setProjects([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  // Memoized filtered projects - only recalculates when dependencies change
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  // Memoized visible projects
  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  // Check if there are more projects to load
  const hasMoreProjects = useMemo(() => {
    return visibleCount < filteredProjects.length;
  }, [visibleCount, filteredProjects.length]);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(PROJECTS_PER_BATCH);
  }, [activeCategory]);

  // Optimized load more function
  const loadMoreProjects = useCallback(() => {
    if (loadingMore || !hasMoreProjects) return;

    setLoadingMore(true);

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
      setVisibleCount((prev) => prev + PROJECTS_PER_BATCH);
      setLoadingMore(false);
    });
  }, [loadingMore, hasMoreProjects]);

  // Intersection Observer with better performance
  const lastProjectRef = useCallback(
    (node) => {
      if (loading || loadingMore || !hasMoreProjects) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMoreProjects();
          }
        },
        {
          rootMargin: "100px", // Trigger 100px before reaching the element
          threshold: 0.1,
        }
      );

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, loadingMore, hasMoreProjects, loadMoreProjects]
  );

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  if (loading) {
    return (
      <section className={styles.project_section}>
        <div className={styles.loading_container}>
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.project_section}>
      <div className={styles.cards_ctr}>
        {visibleProjects.length > 0 ? (
          <>
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                ref={
                  index === visibleProjects.length - 1 && hasMoreProjects
                    ? lastProjectRef
                    : null
                }
              />
            ))}
            {loadingMore && (
              <div className={styles.loading_more}>
                <p>Loading more projects...</p>
              </div>
            )}
          </>
        ) : (
          <div className={styles.empty_state}>
            <p>No projects available for this category</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
