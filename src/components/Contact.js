import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import AppLayout from "./AppLayout";
import { useTheme } from "../context/themeProvider";
import { MdOutlinePersonOutline, MdOutlineEmail } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import {
  FaArrowRight,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

const Sub = () => {
  const form = useRef();
  const ThemeMode = useTheme();
  const [isValid, setIsValid] = useState(false);
  const [toast, setToast] = useState(false);

  const [nameValue, setNameInput] = useState("");
  const [emailValue, setEmailInput] = useState("");
  const [messageValue, setMessageInput] = useState("");

  function ToastPopup({ setToast, text }) {
    useEffect(() => {
      const timer = setTimeout(() => {
        setToast(false);
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }, [setToast]);

    return (
      <BgPage>
        <ToastDiv>
          <p>{text}</p>
        </ToastDiv>
      </BgPage>
    );
  }

  const mailSendValid = () => {
    return nameValue.length >= 1 &&
      emailValue.includes("@") &&
      messageValue.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const handleMailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handleMessageInput = (e) => {
    setMessageInput(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iaqftc6",
        "template_zfq7qfe",
        form.current,
        "N05p1cVyO-i2hNQYE"
      )
      .then(
        (result) => {
          setToast(true);
          console.log(result.text);
          form.current.reset();
          setIsValid(false);
        },
        (error) => {
          alert("전송을 실패했습니다.");
          console.log(error.text);
        }
      );
  };

  return (
    <AppLayout>
      <Wrap theme={ThemeMode[0]}>
        <Card>
          <h2>
            Contact{" "}
            <span>
              <FaArrowRight />
            </span>
          </h2>

          <Pic />
          <div className="social">
            <Number>
              <FaPhoneAlt />
              <Dot>
                <em>+82 10 8543 9961</em>
                <p>
                  Thanks for your interest :-)
                  <br /> I will get back to you within 24 hours.
                </p>
              </Dot>
            </Number>
            <span>
              <a href="https://www.instagram.com/96_jinee_/">
                <FaInstagram />
              </a>
            </span>
            <span>
              <a href="https://github.com/zini96">
                <FaGithub />
              </a>
            </span>
          </div>
          <Button />
        </Card>
        <ContentBox>
          <form ref={form} onSubmit={sendEmail}>
            <Label htmlFor="name">
              <span>
                <MdOutlinePersonOutline />
              </span>
              Name
            </Label>
            <Input
              id="from_name"
              type="text"
              placeholder="성함을 입력해주세요."
              name="from_name"
              onChange={handleNameInput}
              onKeyUp={mailSendValid}
            />
            <Label htmlFor="email">
              <span>
                <MdOutlineEmail />
              </span>
              Email
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="회신받을 이메일 주소를 입력해주세요."
              onKeyUp={mailSendValid}
              onChange={handleMailInput}
            />
            <Label htmlFor="text">
              <span>
                <HiOutlinePencilAlt />
              </span>
              Message
            </Label>
            <TextArea
              name="message"
              placeholder="이메일 내용을 5글자 이상 작성해주세요."
              rows={8}
              onChange={handleMessageInput}
              onKeyUp={mailSendValid}
            />
            <SendBtn
              type="submit"
              name="submit"
              value="Send"
              className={isValid ? "activeBtn" : "unactiveBtn"}
              disabled={!isValid}
            />
          </form>
        </ContentBox>
      </Wrap>
      {toast && (
        <ToastPopup
          setToast={setToast}
          text="메일이 전송되었습니다."
        ></ToastPopup>
      )}
    </AppLayout>
  );
};

export default Sub;

const Wrap = styled.div`
  border-radius: 8px;
  display: flex;
  width: 60%;
  min-height: 65vh;
  background-color: ${(props) =>
    props.theme === "light" ? "#adacaa" : "#f8f7f4"};
  overflow: hidden;
  @media screen and (max-width: 1600px) {
    width: 70%;
  }
  @media screen and (max-width: 1400px) {
    width: 85%;
  }
  @media screen and (max-width: 1030px) {
    width: 90%;
  }
`;

const ToastDiv = styled.div`
  background-color: rgba(230, 183, 74, 0.9);
  border: 1px solid rgba(255, 127, 80, 0.1);
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  height: 40px;
  width: 250px;
  padding: 5px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  position: absolute;
  bottom: calc(50vh - 20px);
  left: calc(50vw - 125px);
`;

const BgPage = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 110;
`;

const Pic = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  background-image: url("https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/279/788d2b01875dd4cdd081f464af79500f_res.jpeg");
  background-size: 200% 200%;
  filter: grayscale(100%);
`;

const Button = styled.button`
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 40px;
  height: 40px;
  background-color: #e6b74a;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  mix-blend-mode: hard-light;
`;

const Dot = styled.button`
  position: absolute;
  left: 80%;
  bottom: -340%;
  width: 0;
  height: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  visibility: hidden;
  & em {
    opacity: 0;
    font-size: 18px;
    z-index: 101;
    text-underline-offset: 4px;
  }
  & p {
    opacity: 0;
    font-size: 14px;
    z-index: 101;
  }
`;

const Number = styled.span`
  &:hover ${Dot} {
    visibility: visible;
    width: 220px;
    height: 220px;
    background-color: #e6964ae6;
    & em {
      opacity: 1;
    }
    & p {
      opacity: 1;
    }
  }
`;

const Card = styled.div`
  border-radius: 8px;
  position: relative;
  width: 40%;
  height: calc(100% - 16px);
  margin: 8px;
  overflow: hidden;
  @media screen and (max-width: 1030px) {
    width: 0;
    margin: 0;
  }
  & .social {
    position: absolute;
    left: 0;
    top: 20px;
    display: flex;
    justify-content: space-between;
    width: 150px;
    height: 64px;
    margin-left: 30px;
    border-radius: 80px;
    & span {
      opacity: 0;
      font-size: 24px;
      color: #fff;
      will-change: transform;
      transform: scale(0.1);
      transition: all 0.2s ease;
      &:first-child {
        transition-delay: 0.3s;
      }
      &:nth-child(2) {
        transition-delay: 0.2s;
      }
      &:last-child {
        transition-delay: 0.1s;
      }
    }
  }
  & h2 {
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 20px;
    font-size: 60px;
    font-weight: bolder;
    color: #fff;
    z-index: 99;
    & span {
      opacity: 0;
      z-index: 100;
      font-size: 40px;
      cursor: pointer;
      color: #fff;
    }
  }
  &:hover .social span {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  &:hover span {
    opacity: 1;
  }
  &:hover ${Pic} {
    filter: grayscale(0);
  }
  &:hover ${Button} {
    transform: scale(16);
  }
`;

const ContentBox = styled.div`
  width: 60%;
  padding: 40px;
  @media screen and (max-width: 1030px) {
    width: 100%;
    padding: 50px;
  }
`;

const Label = styled.label`
  display: block;
  padding-top: 15px;
  color: #31302e;
  & span {
    vertical-align: text-top;
    padding: 0 5px 0 0;
  }
`;

const Input = styled.input`
  margin-top: 4px;
  width: 100%;
  outline: none;
  border: none;
  line-height: 3;
  padding-left: 8px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  &::placeholder {
    color: #b0b0b0c7;
  }
`;

const TextArea = styled.textarea`
  resize: none;
  margin-top: 4px;
  width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  &::placeholder {
    color: #b0b0b0c7;
  }
`;

const SendBtn = styled.input`
  border: none;
  width: 100%;
  min-width: 240px;
  height: 56px;
  border-radius: 4px;
  margin-top: 24px;
  background-color: #e6b74a;
  &:activebtn {
    background: linear-gradient(0deg, #e6b74a 0%, #f2c459 100%);
    &:before {
      height: 0%;
      width: 2px;
    }
    &:hover {
      box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
        -4px -4px 6px 0 rgba(134, 118, 82, 0.5),
        inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
        inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
    }
  }
  &.unactiveBtn {
    background-color: #9c9c9c;
  }
`;
