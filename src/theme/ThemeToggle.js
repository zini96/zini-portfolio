import React from "react";
import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleSwitch htmlFor="toggle" className="toggleSwitch" onClick={toggle}>
      <ToggleBtn className="toggleButton" mode={mode}>
        {mode === "dark" ? <BsSun /> : <BsMoon />}
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
  background-color: ${(props) => props.theme.btnColor};
  border: ${(props) => props.theme.borderColor};
  box-shadow: ${(props) =>
    props.mode === "dark"
      ? "0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)"
      : "0 5px 10px rgba(300, 300, 300, 0.5), 0 2px 4px rgba(300, 300, 300, 0.3)"};
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
  padding-top: 3px;
  padding-left: 1px;

  font-size: 16px;
  line-height: 26px;
  text-align: center;

  color: #31302e;
`;
