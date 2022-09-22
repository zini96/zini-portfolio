import React from "react";

function BlogRight(props) {
  return (
    <div className="blog-part right-blog">
      <marquee width="100%" direction="left">
        {/* 좌우명  */}
        <span>The secret to success is to never give up</span>
        <span>Good to begin well, better to end well</span>
        <span>Nothing is too wonderful to be true</span>
        <span>
          To dismiss front-end design as mere 'icing' is to jeopardize the
          success of any site
        </span>
      </marquee>
      <div className="blog-right-title-container">
        <div className="blog-right-title">Featured Goals</div>
      </div>
      <div className="blog-right">
        <div className="blog-right-container">
          <div className="blog-title-date">
            <div className="blog-right-page">1</div>
          </div>
          <div className="blog-right-page-title">목표1</div>
          <div className="blog-right-page-subtitle">목표1 desc</div>
        </div>
        <div className="blog-right-container">
          <div className="blog-title-date">
            <div className="blog-right-page">2</div>
          </div>
          <div className="blog-right-page-title">목표2</div>
          <div className="blog-right-page-subtitle">목표2 desc</div>
        </div>
        <div className="blog-right-container">
          <div className="blog-title-date">
            <div className="blog-right-page">3</div>
          </div>
          <div className="blog-right-page-title">목표3</div>
          <div className="blog-right-page-subtitle">목표3 desc</div>
        </div>
        <div className="blog-right-container">
          <div className="blog-title-date">
            <div className="blog-right-page">4</div>
          </div>
          <div className="blog-right-page-title">목표4</div>
          <div className="blog-right-page-subtitle">목표4 desc</div>
        </div>
        <div className="blog-right-container">
          <div className="blog-title-date">
            <div className="blog-right-page">5</div>
          </div>
          <div className="blog-right-page-title">목표5</div>
          <div className="blog-right-page-subtitle">목표5 desc</div>
        </div>
        <div className="blog-right-page-footer">ddd</div>
      </div>
    </div>
  );
}

export default BlogRight;
