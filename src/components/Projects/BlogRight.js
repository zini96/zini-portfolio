import React from "react";
import { GiBullseye } from "react-icons/gi";

function BlogRight(props) {
  return (
    <div className="blog-part right-blog">
      <marquee scrolldelay="100" direction="left">
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
          <div className="blog-right-page-title">
            <GiBullseye className="dart" />
            &nbsp;Clean Code
          </div>
          <div className="blog-right-page-subtitle">
            Test-Driven-Development 습관화하기 -코드관리와 코드 퀄리티 향상을
            위해
          </div>
        </div>
        <div className="blog-right-container">
          <div className="blog-title-date">
            <div className="blog-right-page">2</div>
          </div>
          <div className="blog-right-page-title">
            <GiBullseye className="dart" />
            &nbsp; Code log
          </div>
          <div className="blog-right-page-subtitle">
            같은 에러를 두번 만나지 않도록 기록하기
          </div>
        </div>
        <div className="blog-right-container">
          <div className="blog-title-date">
            <div className="blog-right-page">3</div>
          </div>
          <div className="blog-right-page-title">
            <GiBullseye className="dart" />
            &nbsp;지속 가능한 코드
          </div>
          <div className="blog-right-page-subtitle">
            웹 성능을 향상시키기 위해 코드를 개선하고 오래 사용할 수 있는 코드
            작성하기
          </div>
        </div>
        <div className="blog-right-container">
          <div className="blog-title-date">
            <div className="blog-right-page">4</div>
          </div>
          <div className="blog-right-page-title">
            <GiBullseye className="dart" />
            &nbsp;백엔드
          </div>
          <div className="blog-right-page-subtitle">
            서버와 데이터에 대한 이해도를 높혀서 더 안정적이고 효율적인 웹
            서비스 개발하기
          </div>
        </div>

        <div className="blog-right-page-footer"></div>
      </div>
    </div>
  );
}

export default BlogRight;
