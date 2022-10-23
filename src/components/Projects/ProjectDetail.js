import React from "react";
import AppLayout from "../AppLayout";
import styled from "styled-components";
import { useTheme } from "../../context/themeProvider";
import datafile from "../../data/db.json";

function ProjectDetail(props) {
  const ThemeMode = useTheme();

  // console.log(props.match.params.id);
  const idNum = props.match.params.id;

  const dataList = datafile.projects;
  const projectData = dataList[idNum - 1];

  const Videos = projectData.videos;

  // console.log(Videos.length);
  //console.log(Videos.video, Videos.videoDesc);

  const VideoBox = () => {
    if (Videos.length > 0) {
      return Videos.map((video, index) => {
        return (
          <VideoDiv className="videobox" key={index} theme={ThemeMode[0]}>
            <div>
              <video muted autoPlay loop>
                <source
                  src={`../videos/${projectData.mainimg}/${video.video}.mp4`}
                  type="video/mp4"
                />
              </video>
              <h3>{video.videoName}</h3>
            </div>

            <p>{video.videoDesc}</p>
          </VideoDiv>
        );
      });
    } else {
      return <div>동영상 없음</div>;
    }
  };

  const Btn = () => {
    if (projectData.deployurl) {
      return (
        <a href={projectData.deployurl}>
          <button className="deployurl">See Live</button>
        </a>
      );
    }
  };

  //<img src={`/images/${projectData.mainimg}.png`} alt="" />
  return (
    <AppLayout>
      <Inner theme={ThemeMode[0]}>
        <div className="title">
          <h1>{projectData.projectName}</h1>
          <img
            className={projectData.mainimg}
            src={`../images/${projectData.mainimg}_logo.png`}
            alt=""
          />
        </div>
        <div className="desc">
          <p>{projectData.desc}</p>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <p>{projectData.skills}</p>
        </div>

        <div className="runtime">
          <h2>Running Images</h2>
          <div className="runtime_video">{VideoBox()}</div>
        </div>

        <div className="btnDiv">
          {Btn()}
          <a href={projectData.giturl}>
            <button className="giturl">Source Code</button>
          </a>
        </div>
      </Inner>
    </AppLayout>
  );
}

export default ProjectDetail;

const Inner = styled.div`
  width: 75%;
  margin: 0 auto;
  height: 100%;
  padding: 5% 0;
  & .title {
    margin: 5% 0;
    position: relative;
    & h1 {
      position: relative;
      font-size: 7vw;
      font-weight: bold;
      z-index: 10;
    }
    & img {
      position: absolute;
      z-index: 1;
    }
    & .youtube {
      width: 20%;
      left: 35%;
      top: -40%;
      opacity: 0.9;
    }
    & .movie {
      width: 30%;
      left: 48%;
      top: -110%;
      opacity: 0.7;
    }
    & .wego {
      width: 20%;
      left: 33%;
      top: -45%;
    }
    & .portfolio {
      width: 25%;
      left: 57%;
      top: -30%;
      transform: rotate(20deg);
    }
    & .todos {
      width: 15%;
      left: 32%;
      top: -30%;
      transform: rotate(8deg);
    }
    & .starbucks {
      width: 20%;
      left: 47%;
      top: -55%;
      opacity: 0.8;
    }
    & .sulwhasoo {
      width: 40%;
      left: 30%;
      top: -10%;
      opacity: 0.7;
    }
  }
  & .desc {
    border-top: 4px solid;
    border-bottom: 4px solid;
    padding: 5% 0;
    & p {
      font-size: 1.5vw;
    }
  }
  & .skills {
    padding: 5% 0;
    & h2 {
      font-size: 1.8vw;
      font-style: italic;
      font-weight: bold;
    }
    & p {
      font-size: 26px;
    }
  }
  & .runtime {
    padding: 5% 0;
    & h2 {
      font-size: 1.8vw;
      font-style: italic;
      font-weight: bold;
    }
    & .runtime_video {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
  & .btnDiv {
    border-top: 4px solid;
    margin-top: 5%;
    & button {
      --b: 0.15em;
      --c: #e6b74a;

      color: ${(props) => (props.theme === "light" ? "#0000" : "#cccc")};
      font-size: 2vw;
      margin: 50px 50px 140px 0;
      padding-block: var(--b);
      background: linear-gradient(
            var(--c) 50%,
            ${(props) => (props.theme === "light" ? "#000" : "#ccc")} 0%
          )
          0% calc(100% - var(--_p, 0%)) / 100% 200%,
        linear-gradient(var(--c) 0 0) 0% var(--_p, 0%) / var(--_p, 0%) var(--b)
          no-repeat;
      -webkit-background-clip: text, padding-box;
      background-clip: text, padding-box;
      transition: 0.3s var(--_s, 0s) linear,
        background-size 0.3s calc(0.3s - var(--_s, 0s));
      &:hover {
        --_p: 100%;
        --_s: 0.3s;
      }
    }
  }
`;

const VideoDiv = styled.div`
  padding: 32px 0;
  width: 45%;
  &:not(:nth-child(2n)) {
    margin-right: 10%;
  }

  @media screen and (max-width: 1030px) {
    width: 70%;
    margin-bottom: 30px;
    &:not(:nth-child(2n)) {
      margin-right: 0;
    }
  }
  & div {
    border-bottom: 4px double;
    & video {
      width: 100%;
    }
    & h3 {
      font-size: 1.5vw;
      margin: 10px 0;
    }
  }
  & p {
    font-size: 24px;
    margin-top: 20px;
    line-height: 2;
    letter-spacing: -1px;
  }
`;
