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
            뛰노는 속에 생명을 따뜻한 얼마나 시들어 때문이다. 아니한 위하여,
            노래하며 미인을 이상이 오아이스도 아름다우냐? 위하여서 품에 들어
            따뜻한 영원히 설산에서 이것은 반짝이는 충분히 약동하다. 가장 동력은
            뛰노는 이상의 열락의 싸인 있는가? 우리의 작고 놀이 이 남는 때문이다.
            보내는 방황하여도, 공자는 커다란 힘차게 시들어 붙잡아 주는 대중을
            그리하였는가? 것이다.보라, 심장은 그들에게 약동하다. 길지 생명을
            위하여 돋고, 풍부하게 고행을 황금시대를 것이다. 실현에 얼음과 이것을
            쓸쓸한 못하다 청춘이 원질이 새가 교향악이다. 바이며, 군영과 꽃 피다.
            무엇을 간에 같은 인류의 이상 든 교향악이다. <br />
            <br />
            풀이 같으며, 끓는 얼음 인간의 것이다. 소담스러운 바이며, 돋고,
            이상의 황금시대다. 소담스러운 트고, 눈이 봄바람이다. 목숨이 청춘의
            열락의 열매를 청춘의 때문이다. 어디 무엇을 목숨이 같이, 그들은
            없으면, 만물은 그들은 이상은 때문이다. 못할 끝에 피고, 관현악이며,
            있는 어디 철환하였는가? 뜨고, 속에서 가슴이 이상의 열락의 대한
            얼마나 장식하는 미묘한 것이다. 붙잡아 열락의 심장은 무한한 끓는다.
            청춘의 되는 무엇을 인생의 튼튼하며, 있을 열락의 것이다. 얼마나
            대중을 하는 대고, 것이다. 온갖 청춘은 투명하되 가치를 사막이다.
            노래하며 가지에 노년에게서 청춘 피가 이것은 열락의 인류의 피어나는
            약동하다. <br />
            <br />
            오아이스도 쓸쓸한 찬미를 소리다.이것은 그러므로 피다.
          </p>
          <br />
          <h3>
            "The best programmers are not marginally better than merely good
            ones. They are an order-of-magnitude better, measured by whatever
            standard: conceptual creativity, speed, ingenuity of design, or
            problem-solving ability."
          </h3>
          <br />
          <p>
            뛰노는 속에 생명을 따뜻한 얼마나 시들어 때문이다. 아니한 위하여,
            노래하며 미인을 이상이 오아이스도 아름다우냐? 위하여서 품에 들어
            따뜻한 영원히 설산에서 이것은 반짝이는 충분히 약동하다. 가장 동력은
            뛰노는 이상의 열락의 싸인 있는가? 우리의 작고 놀이 이 남는 때문이다.
            보내는 방황하여도, 공자는 커다란 힘차게 시들어 붙잡아 주는 대중을
            그리하였는가? 것이다.보라, 심장은 그들에게 약동하다. 길지 생명을
            위하여 돋고, 풍부하게 고행을 황금시대를 것이다. 실현에 얼음과 이것을
            쓸쓸한 못하다 청춘이 원질이 새가 교향악이다. 바이며, 군영과 꽃 피다.
            무엇을 간에 같은 인류의 이상 든 교향악이다. <br />
            <br />
          </p>
          <h3>SKILLS</h3>
          <ul>
            <li>HTML and CSS</li>
            <li>Javascript and jQuery</li>
            <li>React</li>
            <li>node.js</li>
            <li>Responsive Design</li>
          </ul>
          <br />
          <h3>Future Goals</h3>
          <p>풀스택 개발자가 되기 위해서 하고있는것, 배우고싶은것들</p>
          <br />

          <Link to="/contact">
            <button className="contact">Contact me</button>
          </Link>
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
      }
    }
    & .contact {
      background-color: #9c9c9c;
      font-size: 24px;
      padding: 20px 55px;
      margin-top: 30px;
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
