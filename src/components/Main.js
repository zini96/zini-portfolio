import React from "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../context/themeProvider";
import bgOrange from "../assets/bg_orange.jpg";
import Selfimg from "../assets/self_img.jpg";
import AppLayout from "./AppLayout";

const Main = () => {
  const ThemeMode = useTheme();

  return (
    <AppLayout>
      <Bgdiv theme={ThemeMode[0]} />

      <Aboutme className="aboutme">
        <Content theme={ThemeMode[0]}>
          <div className="sec_text">
            <h1 className="title">
              <span>반갑습니다.</span>
              <span>프론트엔드 신입 개발자</span>
              <span>강수진입니다.</span>
            </h1>

            <h2 className="title">
              <span>aa</span>
              <span>풀스택 개발자를 목표로 하는</span>
              <span>aa</span>
            </h2>
          </div>
          <div className="sec_img">
            <div className="line">
              <div></div>
            </div>
            <div className="img_card">
              <div />
            </div>
            <div className="text_arc">
              <svg viewBox="0 0 260 260" width="260" height="260">
                <defs>
                  <path
                    id="circle"
                    d="
                    M 130, 130
                    m -74, 0
                    a 74,74 0 1,1 148,0
                    a 74,74 0 1,1 -148,0"
                  />
                </defs>
                <text fontSize="20">
                  <textPath className="rotate_text" xlinkHref="#circle">
                    Front-end Developer Continuing to Develop!
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </Content>
      </Aboutme>
    </AppLayout>
  );
};

export default Main;

const WrapContainer = styled.main`
  min-height: 100%;
  position: relative;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Aboutme = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
`;

const titleAnimationIn = keyframes`
  0% {
    transform: translateY(-36px);
    opacity: 0;
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
`;

const titleAnimation = keyframes`
  0% {
    transform: translateY(-36px);
    opacity: 0;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
    transform: translateY(0);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
    transform: translateY(0);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
    transform: translateY(36px);
    opacity: 0;
    -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
`;

const Content = styled.div`
  width:100%;
  height:100%;
  position:absolute;

  & .sec_text{
    width: 700px;
    height: 220px;
    position: relative;
    top:calc(50% - 130px);
    left:10%;
    @media screen and (max-width: 1260px){
      top:60%;
    }
    & h1, h2{
      font-size: 50px;
      text-transform: uppercase;
      color:${(props) => (props.theme === "light" ? "#F8F7F4" : "#ccc")};
      & span{
        width: 100%;
        float: left;
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
        transform: translateY(-36px);
        opacity: 0;
      }
    }
    & h1 span{
      &:first-child{
        animation: ${titleAnimationIn} ease 2s 0.7s both;
      }
      &:nth-child(2){
        animation: ${titleAnimation} ease 6s 0.6s both;
      }
      &:last-child{
        animation: ${titleAnimationIn} ease 2s 0.5s both;
      }
    }
    h2{ 
      top: 28px;
      position: absolute;
      & span{
        &:nth-child(2){
          animation: ${titleAnimationIn} ease 2s 5.8s both;
          color:${(props) => (props.theme === "light" ? "#F8F7F4" : "#ccc")};

        }
      }
    }
      
    }
  }
  & .sec_img {
    & .text_arc {
      display: block;
      width: 250px;
      height: 250px;
      position:absolute;
      top:30px;
      right:5%;
      animation: ${rotate} 10s linear infinite;
      z-index: 10;
      & svg{
        fill: ${(props) => (props.theme === "light" ? "#F8F7F4" : "#ccc")};
        // font-weight:bold;
      }
      }
    }
  }
  & .line{
    z-index:20;
    position:absolute;
    top:185px;
    right:16%;
    width: 20%;
    min-width:300px;
    transform: rotate(8deg);
    border:2px solid ${(props) =>
      props.theme === "light" ? "#F8F7F4" : "#ccc"};
    border-radius:10%;
      & div{
        padding-top:130%;
      }
  }
  & .img_card{
    z-index:20;
    position:absolute;
    top:150px;
    right:13%;
    width: 20%;
    transform: rotate(8deg);
    min-width:300px;
    border:2px solid ${(props) =>
      props.theme === "light" ? "#F8F7F4" : "#ccc"};
    border-radius:10%;
    overflow:hidden;
      & div{
        padding-top:130%;
        background-image: url(${Selfimg});
        background-size:cover;
        filter: ${(props) =>
          props.theme === "light" ? "brightness(100%)" : "brightness(90%)"};
        
      }
  }
`;

const Bgdiv = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  position: absolute;
  background-image: url(${bgOrange});
  background-repeat: no-repeat;
  background-position: 10% 0;
  background-size: cover;
  filter: ${(props) =>
    props.theme === "light" ? "brightness(50%)" : "brightness(30%)"};
`;
