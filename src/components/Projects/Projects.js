import React, { useState, useEffect } from "react";
import AppLayout from "../AppLayout";
import { useTheme } from "../../context/themeProvider";
import "../../style/project.css";
import githublogo from "../../assets/pngegg.png";
import githubW from "../../assets/github_w.png";
import Blogheader from "./Blogheader";
import BlogContainer from "./BlogContainer";
import BlogRight from "./BlogRight";
import datafile from "../../data/db.json";

const Projects = () => {
  const ThemeMode = useTheme();
  const [filterdata, setFilterdata] = useState();
  const [projects, setProjects] = useState();

  useEffect(() => {
    // console.log(datafile.projects);
    setProjects(datafile.projects);
  }, []);

  const filter = (e) => {
    const filterdata = e.target.dataset.filter;
    if (filter == null) {
      return;
    }
    setFilterdata(filterdata);
  };

  return (
    <AppLayout>
      <div className="blog">
        <div className="blog-part is-menu">
          <button onClick={filter} className="blog-menu" data-filter="ALL">
            All
          </button>
          <button onClick={filter} className="blog-menu" data-filter="React">
            React
          </button>
          <button onClick={filter} className="blog-menu" data-filter="JS">
            JS
          </button>
          <button
            onClick={filter}
            className="blog-menu"
            data-filter="Web Publishing"
          >
            Web Publishing
          </button>
          <a href="https://github.com/zini96" className="blog-menu mention">
            {ThemeMode[0] == "light" ? (
              <img src={githublogo} className="github" />
            ) : (
              <img src={githubW} className="github" />
            )}
            zini96
          </a>
        </div>
        <Blogheader filter={filterdata} />
        {/* <BlogContainer filterdata={filterdata} /> */}
        <div className="blog-header-container">
          {projects && (
            <BlogContainer projects={projects} filterdata={filterdata} />
          )}
        </div>
        <BlogRight />
      </div>
    </AppLayout>
  );
};

export default Projects;
