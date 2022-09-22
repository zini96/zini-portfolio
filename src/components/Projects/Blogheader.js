import React from "react";

function Blogheader(props) {
  const filtername = props.filter;
  return (
    <div className="blog-header blog-is-sticky">
      <div className="blog-article header-article">
        <div className="blog-big__title">{filtername ? filtername : "ALL"}</div>
        <div className="blog-menu rounded small-title">
          {filtername ? filtername : "ALL"} projects
        </div>
      </div>
    </div>
  );
}

export default Blogheader;
