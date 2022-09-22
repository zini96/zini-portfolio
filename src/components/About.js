import React from "react";
import styled, { keyframes } from "styled-components";
import AppLayout from "./AppLayout";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider";
import "../style/about.css";
import bgOrange from "../assets/bg_orange.jpg";
import { FaAngleDoubleDown } from "react-icons/fa";
import Header from "./Header";
import profiledemo from "../assets/profiledemo.PNG";

const About = () => {
  const ThemeMode = useTheme();

  return (
    <WrapContainer>
      <Header />
      <Aboutme className="aboutme" theme={ThemeMode[0]}>
        <Bgdiv className="blackbg" theme={ThemeMode[0]}></Bgdiv>
        <div className="sec1_text">
          <div className="profile-img-container">
            <img src={profiledemo} className="profile-img" />
          </div>
          <p>프론트엔드 개발자가 되고싶은 입니다.</p>
          <p>ddddddddddddddddddddddddddddddddd</p>
          <div className="sec1Btn">
            <button type="button" className="work_btn">
              <Link to="/project">project 바로가기</Link>
            </button>
            <button type="button" className="git_btn">
              <a href="https://github.com/zini96"> github 바로가기</a>
            </button>
          </div>
        </div>
        <Arrow className="arrow" theme={ThemeMode[0]}>
          <FaAngleDoubleDown />
          <p>scroll</p>
        </Arrow>
      </Aboutme>
      <Introduce>
        <div className="intro1">
          <div className="intro_img ">
            <div className="profile-img-container">
              <img src={profiledemo} className="profile-img" />
            </div>
          </div>
          <div className="intro_text">
            <h3>좌우명</h3>
            <p>desc</p>
          </div>
        </div>
        <div className="intro2">
          <div className="life_map_1 blog-part">
            <span className="main_branch"></span>
            <div className="bubble_box">
              <span className="turning_point"></span>
              <div className="bubble">
                <h4>
                  [스마트웹 & 콘텐츠 개발]PWA 제작 프론트엔드 개발 디지털 실무
                  양성과정
                </h4>
                <p>수강기간 : 2021.09.06 - 2022.03.04</p>
              </div>
            </div>
            <div className="bubble_box">
              <span className="turning_point"></span>
              <div className="bubble">
                <h4>드림코딩 아카데미 REACT 실무강의</h4>
                <p>수강기간 : 2021.09.06 - 2022.03.04</p>
              </div>
            </div>
            <div className="bubble_box">
              <span className="turning_point"></span>
              <div className="bubble">
                <h4>드림코딩 아카데미 REACT 실무강의</h4>
                <p>수강기간 : 2021.09.06 - 2022.03.04</p>
              </div>
            </div>
          </div>
          <div className="life_map_2 blog-part">
            <span className="main_branch"></span>
            <div className="bubble_box">
              <div className="bubble">
                <h4>스튜디오 워크플레이스 재직</h4>
                <p>재직기간 : 2021.06.10 - 2022.02.10</p>
              </div>
              <span className="turning_point"></span>
            </div>
            <div className="bubble_box">
              <div className="bubble">
                <h4>드림코딩 </h4>
                <p>수강기간 : </p>
              </div>
              <span className="turning_point"></span>
            </div>
            <div className="bubble_box">
              <div className="bubble">
                <h4>드림코딩</h4>
                <p>수강기간 : </p>
              </div>
              <span className="turning_point"></span>
            </div>
          </div>
        </div>
      </Introduce>
    </WrapContainer>
  );
};

export default About;

const WrapContainer = styled.main`
  min-height: 100%;
  position: relative;
`;

const Aboutme = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  background: url(${bgOrange});
  background-repeat: no-repeat;
  background-size: cover;

  color: ${(props) => (props.theme === "light" ? "#eaeaea" : "#2c2d33")};
  font-weight: ${(props) => (props.theme === "light" ? "normal" : "bold")};
`;

const Bgdiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.theme === "light"
      ? "rgba(0, 0, 0, 0.466)"
      : "rgba(255, 255, 255, 0.466)"};
  position: absolute;
  top: 0;
  left: 0;
`;

const arrow = keyframes`
  0%{margin: 0px 2px;}
  70%{margin: 40px 2px; opacity: 0.7;}
  100%{margin:20px 2px; opacity: 1;}
`;

const Arrow = styled.div`
  top: 85%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation: ${arrow} 1s 0s infinite ease-in-out alternate;
  color: ${(props) => (props.theme === "light" ? "#eaeaea" : "#2c2d33")};
  text-align: center;
`;

const Introduce = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
