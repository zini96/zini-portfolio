import React from "react";
import styled from "styled-components";

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleSwitch for="toggle" className="toggleSwitch" onClick={toggle}>
      <ToggleBtn className="toggleButton" mode={mode}>
        {mode === "dark" ? "Off" : "On"}
      </ToggleBtn>
    </ToggleSwitch>
  );
}

export default ThemeToggle;

const ToggleSwitch = styled.label`
  position: relative;
  box-sizing: border-box;
  width: 80px;
  height: 35px;
  border-radius: 20px;
  display: block;
  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.borderColor};
  box-shadow: ${(props) =>
    props.mode === "dark"
      ? "0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)"
      : "0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)"};
  cursor: pointer;
  transition: all 0.2s ease-in;
`;

const ToggleBtn = styled.span`
  width: 26px;
  height: 26px;
  position: absolute;
  top: calc(50% - 13px);
  left: ${(props) => (props.mode === "dark" ? "calc(100% - 32px);" : "4px")};
  border-radius: 50%;
  background: #e6b74a;
  transition: all 0.2s ease-in;

  font-size: 12px;
  line-height: 26px;
  text-align: center;

  color: ${(props) => (props.mode === "dark" ? "#fff;" : "#31302E")};
`;
