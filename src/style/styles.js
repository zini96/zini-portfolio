import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0px 14px;
  transition: all 0.2s linear;
  width: calc(100%-2rem);
  height: calc(100vh - 70px);

  & h2 {
    font-size: 28px;
    line-height: 1.2;
    font-weight: 500;
    padding-bottom: 25px;
    color: ${({ theme }) => theme.textColor};
    // text-align: center;
    & span {
      color: ${({ theme }) => theme.textColor};
    }
  }
`;
