import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider";
import styled from "styled-components";
import logo from "../assets/logo.png";
import ThemeToggle from "../theme/ThemeToggle";

const Header = () => {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <nav>
      <StyledHeader>
        <RightMenu>
          <ThemeToggle toggle={toggleTheme} mode={ThemeMode} />
        </RightMenu>
        <Logo>
          <Link to="/">
            <p>logo</p>
          </Link>
        </Logo>
        <LeftMenu>
          <Link to="/about">ABOUT</Link>
          <Link to="/skills">SKILLS</Link>
          <Link to="/project">PROJECT</Link>
          <Link to="/contact">CONTACT</Link>
        </LeftMenu>
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
  height: 60px;
  padding: 0px 24px;
  border-bottom: ${({ theme }) => theme.borderColor};
  position: relative;
`;

const RightMenu = styled.li`
  width: 10%;
`;

const Logo = styled.li`
  width: 200px;
  position: absolute;
  left: calc(50% - 100px);
  text-align: center;
  & p {
    margin-left: 2px;
    font-size: 16px;
    font-weight: 500;
    color: #e6b74a;
  }
`;

const LeftMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 32%;
  font-size: 14px;
  font-weight: 500;
`;
