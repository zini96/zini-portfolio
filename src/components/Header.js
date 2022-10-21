import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider";
import styled, { keyframes } from "styled-components";
import ThemeToggle from "../theme/ThemeToggle";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [ThemeMode, toggleTheme] = useTheme();
  const [menu, setmenu] = useState(false);

  return (
    <nav>
      <StyledHeader>
        <RightMenu>
          <ThemeToggle toggle={toggleTheme} mode={ThemeMode} />
        </RightMenu>

        <Link to="/">
          <Logo />
        </Link>

        <LeftMenu menu={menu}>
          <Link to="/about">
            <p>ABOUT</p>
          </Link>
          <Link to="/project">
            <p>PROJECT</p>
          </Link>
          <Link to="/contact">
            <p>CONTACT</p>
          </Link>
        </LeftMenu>
        <Menubar
          href="#"
          onClick={() => {
            setmenu(!menu);
          }}
        >
          <IoIosMenu />
        </Menubar>
      </StyledHeader>
    </nav>
  );
};

export default Header;

const StyledHeader = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0px 24px;
  border-bottom: ${({ theme }) => theme.borderColor};
  position: relative;
  z-index: 100;
`;

const RightMenu = styled.li`
  width: 10%;
`;

const Logo = styled.li`
  width: 120px;
  height: 50px;
  margin: 10px 0;
  position: absolute;
  top: 0;
  left: calc(50% - 60px);
  text-align: center;
  background-image: url(${({ theme }) => theme.logo});
  background-size: contain;
  background-repeat: no-repeat;
`;

const menudrop = keyframes`
  0%{
    height: 0;
  }
  100%{
    height: calc(100vh - 70px);
  }
`;

const textease = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const LeftMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 25%;
  font-size: 14px;
  font-weight: 500;
  margin-right: 5%;

  @media screen and (max-width: 1030px) {
    animation: ${menudrop} 1s;
    animation-fill-mode: forwards;
    position: absolute;
    top: 70px;
    right: -50px;
    flex-direction: column;
    background-color: #e2e0d4;
    width: 25%;
    z-index: 99;
    justify-content: flex-start;
    padding-top: 20px;
    display: ${({ menu }) => {
      return menu === false ? "none" : "flex";
    }};
    & p {
      animation: ${textease} 1s;
      margin: 18px 0;
      text-decoration: underline;
      text-underline-position: under;
      transition: 0.3s;
      &:hover {
        color: #e6b74a;
      }
    }
  }
`;

const Menubar = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  position: absolute;
  right: 32px;
  height: 97px;
  @media screen and (min-width: 1030px) {
    display: none;
  }
`;
