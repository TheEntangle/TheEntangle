import React, { useEffect, useState } from "react";
import Faq from "../components/Faq";
import BookApointment from "../components/BookApointment";
import Footer from "../components/Footer";
import Landing from "../components/project/Landing";
import Thumbnail from "../components/project/Thumbnail";
import AboutProject from "../components/project/AboutProject";

import supabase from "../utils/supabase";
import { useParams } from "react-router-dom";


function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
useEffect(() => {
    async function fetchProject() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;

        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [id]);

  if (loading) {
    return <div>Loading project details...</div>;
  }

  if (!project) {
    return <div>Project not found.</div>;
  }

  const landing_page_data = {
    heading: project.heading,
    tags: project.tags,
    description: project.description,
    live_link: project.live_link,
    date: project.project_date,
    category: project.category
  }

  const thumbnail_data = {
    thumbnail: project.thumbnail
  };

  const about_project_data = {
    about: project.sections,
    images: project.project_images
  }

  return (
    <>
      <Landing data={landing_page_data} />
      <Thumbnail data={thumbnail_data}  />
      <AboutProject data={about_project_data} />
      <Faq />
      <BookApointment />
      <Footer />
    </>
  );
}

export default Project;
