import React from "react";

function BlogContainer({ filterdata, projects }) {
  const projectAll = projects.map((project) => (
    <div className="blog-header" key={project.id}>
      <div className="blog-article header-article">
        <div className="blog-big__title">{project.projectName}</div>
        <div className="blog-menu small-title date">{project.summary}</div>
      </div>
      <div className="blog-article">
        <img src={project.mainimg} alt="" />
        <h2>
          {project.projectFn}
          <span>{project.keyFn}</span>
        </h2>
        <div className="blog-detail">
          <span>skill</span> {project.skills}
        </div>
        {/* 프로젝트를 통해 배운점 */}
        <p>{project.desc}</p>
        <a href={project.giturl}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-corner-down-right"
            viewBox="0 0 24 24"
          >
            <path d="M15 10l5 5-5 5" />
            <path d="M4 4v7a4 4 0 004 4h12" />
          </svg>
          README
        </a>
      </div>
    </div>
  ));

  const projectReact = projects
    .filter((project) => project.category === "react")
    .map((project) => (
      <div className="blog-header" key={project.id}>
        <div className="blog-article header-article">
          <div className="blog-big__title">{project.projectName}</div>
          <div className="blog-menu small-title date">{project.summary}</div>
        </div>
        <div className="blog-article">
          <img src={project.mainimg} alt="" />
          <h2>
            {project.projectFn}
            <span>{project.keyFn}</span>
          </h2>
          <div className="blog-detail">
            <span>skill</span> {project.skills}
          </div>
          {/* 프로젝트를 통해 배운점 */}
          <p>{project.desc}</p>
          <a href={project.giturl}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-corner-down-right"
              viewBox="0 0 24 24"
            >
              <path d="M15 10l5 5-5 5" />
              <path d="M4 4v7a4 4 0 004 4h12" />
            </svg>
            README
          </a>
        </div>
      </div>
    ));

  const projectJS = projects
    .filter((project) => project.category === "javascript")
    .map((project) => (
      <div className="blog-header" key={project.id}>
        <div className="blog-article header-article">
          <div className="blog-big__title">{project.projectName}</div>
          <div className="blog-menu small-title date">{project.summary}</div>
        </div>
        <div className="blog-article">
          <img src={project.mainimg} alt="" />
          <h2>
            {project.projectFn}
            <span>{project.keyFn}</span>
          </h2>
          <div className="blog-detail">
            <span>skill</span> {project.skills}
          </div>
          {/* 프로젝트를 통해 배운점 */}
          <p>{project.desc}</p>
          <a href={project.giturl}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-corner-down-right"
              viewBox="0 0 24 24"
            >
              <path d="M15 10l5 5-5 5" />
              <path d="M4 4v7a4 4 0 004 4h12" />
            </svg>
            README
          </a>
        </div>
      </div>
    ));

  const projectUIUX = projects
    .filter((project) => project.category === "UIUX")
    .map((project) => (
      <div className="blog-header" key={project.id}>
        <div className="blog-article header-article">
          <div className="blog-big__title">{project.projectName}</div>
          <div className="blog-menu small-title date">{project.summary}</div>
        </div>
        <div className="blog-article">
          <img src={project.mainimg} alt="" />
          <h2>
            {project.projectFn}
            <span>{project.keyFn}</span>
          </h2>
          <div className="blog-detail">
            <span>skill</span> {project.skills}
          </div>
          {/* 프로젝트를 통해 배운점 */}
          <p>{project.desc}</p>
          <a href={project.giturl}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-corner-down-right"
              viewBox="0 0 24 24"
            >
              <path d="M15 10l5 5-5 5" />
              <path d="M4 4v7a4 4 0 004 4h12" />
            </svg>
            README
          </a>
        </div>
      </div>
    ));

  console.log(filterdata);

  if (!filterdata) {
    return <div className="blog-header-container">{projectAll}</div>;
  } else if (filterdata === "ALL") {
    return <div className="blog-header-container">{projectAll}</div>;
  } else if (filterdata === "React") {
    return <div className="blog-header-container">{projectReact}</div>;
  } else if (filterdata === "JS") {
    return <div className="blog-header-container">{projectJS}</div>;
  } else if (filterdata === "UIUX") {
    return <div className="blog-header-container">{projectUIUX}</div>;
  }
}

export default BlogContainer;
