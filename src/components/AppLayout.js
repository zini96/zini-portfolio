import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import { FlexContainer } from "../style/styles";
import ThemeToggle from "../theme/ThemeToggle";
import Header from "./Header";
import TopBtn from "./TopBtn";

const AppLayout = ({ children }) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <WrapContainer>
      <Header />
      <FlexContainer>{children}</FlexContainer>
      <TopBtn></TopBtn>
    </WrapContainer>
  );
};

export default AppLayout;

const WrapContainer = styled.main`
  min-height: 100%;
  position: relative;
`;
