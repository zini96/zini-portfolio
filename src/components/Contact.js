import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import AppLayout from "./AppLayout";
import { useTheme } from "../context/themeProvider";
import {
  MdOutlinePersonOutline,
  MdOutlineEmail,
  MdClose,
} from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import {
  FaArrowRight,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

const Sub = () => {
  const ThemeMode = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [bgpage, setBgpage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const isValidSend = (form) => {
    return !(
      formInput.name &&
      formInput.email.includes("@") &&
      formInput.message.length > 5
    );
  };

  const handleContactInput = (e) => {
    const { value, name } = e.target;
    setFormInput({ ...formInput, [name]: value });
    const validForm = isValidSend(formInput);
    setIsDisabled(!validForm);
  };

  console.log(formInput, isDisabled);

  const showModal = () => {
    setModalOpen(true);
    setBgpage(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setBgpage(false);
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
          <form
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyo0F95BVna2eQlKhHtH0IZS0jdI-dnE48GvHXOO036d8bjZ2Qvlc1CErh3WC3GN2M/exec"
            target="iframe1"
          >
            <div>
              <Fieldset>
                <Label htmlFor="name">
                  <span>
                    <MdOutlinePersonOutline />
                  </span>
                  Name
                </Label>
                <br />
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. John doe"
                  onChange={handleContactInput}
                  value={formInput.name || ""}
                />
              </Fieldset>

              <Fieldset>
                <Label htmlFor="email">
                  <span>
                    <MdOutlineEmail />
                  </span>
                  Email
                </Label>
                <br />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  valueDefault=""
                  required
                  placeholder="your.name@email.com"
                  onChange={handleContactInput}
                  value={formInput.email || ""}
                />
              </Fieldset>

              <Fieldset>
                <Label htmlFor="message">
                  <span>
                    <HiOutlinePencilAlt />
                  </span>
                  Message
                </Label>
                <br />
                <TextArea
                  id="message"
                  name="message"
                  rows="10"
                  placeholder="type here"
                  onChange={handleContactInput}
                  value={formInput.message || ""}
                />
              </Fieldset>
            </div>

            <SendBtn
              disabled={!isDisabled}
              className={isDisabled ? "activeBtn" : "unactiveBtn"}
              onClick={showModal}
            >
              Send Message
            </SendBtn>
          </form>
          <iframe
            id="iframe1"
            name="iframe1"
            style={{ display: "none" }}
          ></iframe>
        </ContentBox>
      </Wrap>
      {bgpage && <BgPage />}
      {modalOpen && (
        <Modal>
          <div className="container">
            <div className="animation">
              <div className="mail">
                <div className="mail-anim" />
              </div>
              <div className="line" />
              <div className="success">
                <div className="success-anim" />
              </div>
            </div>
            <div className="message">
              Your message has been sent successfully
            </div>
          </div>
          <div className="thxmsg">
            Thanks for your interest :-)
            <br /> I will get back to you within 24 hours.
          </div>
          <button onClick={closeModal}>
            <MdClose />
          </button>
        </Modal>
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

const BgPage = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 110;
`;

const transformS = keyframes`
  50% {transform: scale(.5, .5); opacity: .5;}
`;

const moveL = keyframes`
  100% { transform: translateX(220px) rotateY(90deg);}
`;

const moveR = keyframes`
  0% { transform: translateX(-220px) rotateY(90deg);}
  50% { transform: translateX(0) rotateY(0);}
`;

const transformB = keyframes`
  50% {transform: scale(1.5, 1.5); background: $color-1;}
  100%{background: $color-1;}
`;

const transformBA = keyframes`
  100% {border-bottom: 2px solid $color-2;
  border-left: 2px solid $color-2;}
`;

const rotateCenter = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Modal = styled.div`
  position: absolute;
  background-color: #fff;
  width: 640px;
  height: 300px;
  z-index: 120;
  border-radius: 8px;
  & button {
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 40px;
    left: calc(50% - 15px);
    display : inline-flex;
    align-items: center
    justify-content: center;
    font-size: 40px;
    &:hover {
      animation: ${rotateCenter} 1s ease-in-out both;
    }
  }
  & .thxmsg {
    width: 100%;
    position: absolute;
    top: 140px;
    text-align: center;
    font-size: 20px;
  }
  & .container {
    position: absolute;
    top: 50px;
    left: calc(50% - 270px);
    width: 540px;
    & .message {
      text-align: center;
      margin-top: 10px;
    }
    & .animation {
      width: 540px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & .success {
        width: 40px;
        height: 30px;
        border-radius: 5% 5%;
        border: 2px solid #e0b341;
        position: relative;
        animation: ${transformB} 0.3s 1.4s linear forwards;
        &:after {
          content: "";
          position: absolute;
          bottom: 12px;
          left: 11px;
          width: 15px;
          height: 8px;
          border-bottom: 2px solid #e0b341;
          border-left: 2px solid #e0b341;
          transform: rotate(-45deg);
          animation: ${transformBA} 0.3s 1.4s linear forwards;
        }
        & .success-anim {
          width: 40px;
          height: 30px;
          border-radius: 5% 5%;
          border: 2px solid #e0b341;
          position: relative;
          margin: -2px 0 0 -2px;
          animation: ${moveR} 0.8s 1s linear;
          &:after {
            content: "";
            position: absolute;
            bottom: 12px;
            left: 11px;
            width: 15px;
            height: 8px;
            border-bottom: 2px solid #e0b341;
            border-left: 2px solid #e0b341;
            transform: rotate(-45deg);
          }
        }
      }
      & .line {
        padding: 1px 210px;
        background-image: linear-gradient(
          to right,
          #000 30%,
          rgba(255, 255, 255, 0) 0%
        );
        background-position: top;
        background-size: 15px 2px;
        background-repeat: repeat-x;
      }
      & .mail {
        width: 40px;
        height: 30px;
        border-radius: 5% 5%;
        border: 2px solid black;
        position: relative;
        animation: ${transformS} 0.3s linear;
        &:after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 5px;
          width: 15px;
          height: 4px;
          border-bottom: 2px solid black;
          border-top: 2px solid black;
        }
        &:before {
          content: "";
          position: absolute;
          top: 5px;
          right: 5px;
          width: 7px;
          height: 6px;
          background: black;
        }
        & .mail-anim {
          width: 40px;
          height: 30px;
          border-radius: 5% 5%;
          border: 2px solid black;
          position: relative;
          margin: -2px 0 0 -2px;
          animation: ${moveL} 0.8s linear;
          &:after {
            content: "";
            position: absolute;
            bottom: 5px;
            left: 5px;
            width: 15px;
            height: 4px;
            border-bottom: 2px solid black;
            border-top: 2px solid black;
          }
          &:before {
            content: "";
            position: absolute;
            top: 5px;
            right: 5px;
            width: 7px;
            height: 6px;
            background: black;
          }
        }
      }
    }
  }
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

const Fieldset = styled.fieldset`
  padding-top: 15px;
`;

const Label = styled.label`
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

const SendBtn = styled.button`
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
