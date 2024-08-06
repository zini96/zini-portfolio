import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

import styled, { keyframes } from "styled-components";

function TopBtn() {
  const [showButton, setShowButton] = useState(false);

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // console.log(window.scrollY);

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <ToTop onClick={moveToTop}>
        <FaAngleDoubleUp />
      </ToTop>
    )
  );
}

export default TopBtn;

const ToTop = styled.button`
  width: 50px;
  height: 60px;
  background-color: transparent;
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 50;
  font-size: 20px;
  border-radius: 30px;
  border 1.5px solid ${(props) => props.theme.textColor};
  color:${(props) => props.theme.textColor};

  &:hover{
    background-color: ${(props) => props.theme.textColor};
    color:${(props) => props.theme.bgColor};
  }
`;
