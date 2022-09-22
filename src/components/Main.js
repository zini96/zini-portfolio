import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "./AppLayout";
import bg from "../assets/bg_orange.jpg";

const Main = () => {
  const ThemeMode = useTheme();
  // const CurrentMode = ThemeMode[0] === "light" ? "🌝" : "🌚";

  return <AppLayout></AppLayout>;
};

export default Main;

const ColoredText = styled.span`
  color: #e6b74a;
`;
