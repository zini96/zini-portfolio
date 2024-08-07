import React from "react";
import styled from "styled-components";
import AppLayout from "./AppLayout";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider";
import selfImg from "../assets/self_img.jpg";

const About = () => {
  const ThemeMode = useTheme();

  return (
    <AppLayout>
      <Aboutme className="aboutme" theme={ThemeMode[0]}>
        <div className="sec1_text">
          <h1>About</h1>
          <h2>
            I'm Sujin. A developer,
            <br />
            maker and problem solver.
          </h2>
          <p>
            안녕하세요!
            <br />
            <br />
            저는 신입 프론트엔드 개발자 강수진입니다.
            <br />
            웹 개발에 대한 열정을 가지고 있으며, 현재 HTML, CSS, JavaScript와
            React 컴포넌트를 활용하여 프론트엔드 개발에 집중하고 있습니다.
            UI/UX의 중요성에 대해서도 인지하고 있으며 이를 통해 사용자에게 높은
            품질의 웹 경험을 제공하고자 합니다.
            <br />
            <br />
            <br />
            프론트엔드 개발에 대한 관심은 당시 재직 중이던 스튜디오의 홍보용
            홈페이지를 직접 제작해보고 싶다는 열망에서 시작되었습니다. 웹
            페이지의 기능을 직접 구현해보면서 개발의 매력을 깊게 느꼈고, 이
            경험을 통해 프론트엔드 개발에 대한 열정을 확립하게 되었습니다. 이후
            프론트엔드 과정 수업을 수강하고, 개인 프로젝트와 인터넷 강좌를 통해
            개발자로서의 역량을 쌓아왔습니다. 디지털 아트와 UI 디자인에 대한 큰
            관심도 프론트엔드 개발을 선택한 이유 중 하나입니다. 그림을 그리거나
            무언가를 만드는 것을 좋아하는 저에게 개발의 과정 자체가 창의적이고
            보람된 작업으로 다가왔습니다. 코드에 따라 구현되는 웹 페이지를 직접
            조작하고 사용자 경험을 개선하는 과정에서 큰 만족감을 느끼며,
            프론트엔드 개발을 선택하게 되었습니다.
            <br />
            <br />
            앞으로는 프론트엔드 개발 외에도 풀스택 개발자로 성장하고자 하는
            목표를 가지고 있습니다. 현재는 데이터 구조와 관리에 대한 이해도를
            높이기 위해 SQLD 자격증을 공부하고 있으며, Node.js와 MongoDB를
            활용한 개인 프로젝트를 통해 백엔드 기술을 익히고 있습니다. 앞으로 더
            많은 학습과 실무 경험을 통해 기술적 역량을 강화하고, 다양한
            프로젝트에서의 경험을 쌓아 나가고자 합니다. 또한, AI 기술의 발전에도
            관심을 가지고 있으며, 이를 통해 개발 영역에서의 새로운 가능성을
            탐구하고자 합니다.
            <br />
            <br />
            <br />
            저는 항상 긍적적으로 생각하기 위해 노력합니다. 이러한 사고방식은 제
            개발 작업에 중요한 역할을 합니다. 문제와 오류에 직면했을 때,
            낙관적인 태도로 문제의 본질을 파악하고 해결책을 모색하는 데
            집중합니다. 이러한 접근은 문제 해결 능력을 키우는 데 큰 도움이 되며,
            프로젝트의 성공적인 완수를 위한 중요한 요소로 작용합니다.
            <br />
            <br />
            또한, 타인의 의견을 경청하고 존중하는 능력은 협업에서 중요한
            자질입니다. 저는 이전에 서비스직에서 일하면서 소통의 중요성을 깊게
            이해하게 되었고, 다양한 사람들과 새로운 것에 대해 대화하는 것을
            즐깁니다. 팀 프로젝트와 협업에서는 다양한 의견을 수용하고 이를
            바탕으로 최적의 해결책을 찾는 것이 필수적입니다. 비록 팀 업무 경험이
            많지는 않지만, 서비스직에서의 경험을 통해 팀원들과 원활하게 소통하고
            협력하는 데 필요한 태도와 역량을 갖추었습니다. 협업의 시너지를
            극대화하고 프로젝트를 성공적으로 이끌어내기 위해 항상 노력하며,
            새로운 환경에서도 빠르게 적응하고 협조적으로 작업할 준비가 되어
            있습니다.
            <br />
            <br />
            다만, 새로운 기술이나 작업을 익히는 데 시간이 걸리는 경우가 있으며,
            이는 때때로 어려움으로 다가올 수 있습니다. 그러나 이러한 점을
            극복하기 위해 꾸준한 학습과 반복적인 연습을 통해 기술적 숙련도를
            높이려는 노력을 기울이고 있습니다. 변화하는 IT 환경에 맞춰
            지속적으로 학습하며, 깊이 있는 이해를 목표로 삼고 있습니다.
            <br />
            <br />
            제가 작업한 개인 프로젝트는 하단의 Project 버튼을 통해 확인하실 수
            있으며, 연락은 Contact 버튼을 통해 가능합니다.
            <br />
            <br />
            저는 지속적으로 발전하며, 다양한 도전 과제를 해결하는 과정에서
            성장해 나가는 즐거운 여정을 기대하고 있습니다. 신입 개발자로서의
            신선한 시각과 학습에 대한 열정을 바탕으로, 실질적인 기여를 할 수
            있는 기회를 기다리고 있습니다.
            <br />
            감사합니다!
            <br />
          </p>
          <br />
          <br />

          <h3>SKILLS</h3>
          <ul>
            <li>HTML and CSS</li>
            <li>Javascript and jQuery</li>
            <li>React</li>
            <li>node.js</li>
            <li>Responsive Design</li>
          </ul>
          <br />
          <br />
          <br />
          <div className="btnBox">
            <Link to="/project">
              <button className="contact">Projects</button>
            </Link>
            <Link to="/contact">
              <button className="contact">Contact me</button>
            </Link>
          </div>
        </div>

        <div className="sec2">
          <div className="profile-img-container">
            <img src={selfImg} className="profile-img" />
          </div>
        </div>
      </Aboutme>
    </AppLayout>
  );
};

export default About;

const Aboutme = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  font-weight: ${(props) => (props.theme === "light" ? "normal" : "bold")};
  & .sec1_text {
    width: 50%;
    text-align: start;
    & h1 {
      font-size: 10vw;
      font-weight: bold;
    }
    & h2 {
      font-size: 2.5vw;
      margin: 25px 0;
    }
    & h3 {
      font-size: 28px;
      font-style: italic;
      font-weight: 500;
      margin: 20px 0;
    }
    & p {
      line-height: 2;
    }
    & ul {
      & li {
        list-style-type: circle;
        margin-left: 20px;
        margin-bottom: 12px;
      }
    }
    & .contact {
      background-color: #9c9c9c;
      font-size: 24px;
      padding: 20px 55px;
      margin-top: 30px;
      margin-right: 30px;
      margin-bottom: 100px;
      color: ${(props) => (props.theme === "light" ? "#eaeaea" : "#2c2d33")};
      border-radius: 10px;
      transition: 0.5s;
      &:hover {
        background-color: #e6b74a;
      }
    }
  }
  & .sec2 {
    width: 25%;
    margin-left: 5%;
    margin-top: 55px;
    & .profile-img-container {
      max-width: 400px;
    }
  }
`;
