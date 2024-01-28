import styled, { keyframes } from "styled-components";

export const SkillsWrapper = styled.div<any>`
  background-color: ${({ props }) => props.bodyColor};
  color: ${({ props }) => props.bodyTextColor};
  height: calc(100vh - 19vh);
  position: relative;
  transition: all 0.6s ease;
`;
export const HeaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 800;
  border: 5px dotted red;
  padding: 5px 20px;
`;
export const SkillSection = styled.section`
  height: calc(100vh - 19vh);
`;

const slideInFromBottom = keyframes`
from {
    top: 100%;
  }
  to {
    top: -30%;
  }
`;
export const Buttons = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  padding: 9px 12px;
  border-radius: 8px;
  transition: all 0.8s ease;
  position: absolute;
  animation: ${slideInFromBottom} 0.8 ease;
  
  &:hover{
      background-color: red;
      transform: scale(1.3);
      transform-style: preserve-3d;
      box-shadow: 2px 2px 6px 5px rgba(255, 0, 0, 0.4);
  }

  &.react{
    top: 20%;
    left: 10%
  }
  &.javascript{
    top: 15%;
    left: 30%
  }
  &.typescript{
    top: 25%;
    left: 40%
  }
  &.HTML5{
    top: 45%;
    right: 30%
  }
  &.CSS3{
    top: 15%;
    left: 56%
  }
  &.redux{
    bottom: 20%;
    left: 7%
  }
  &.reduxToolkit{
    bottom: 25%;
    left: 17%
  }
  &.github{
    bottom: 22%;
    left: 40%
  }
  &.postman{
    bottom: 5%;
    right: 40%
  }
  &.thunk{
    bottom: 35%;
    right: 20%
  }
  &.styledcomponents{
    top: 25%;
    right: 10%
  }
  &.reactnative{
    top: 38%;
    left: 22%
  }
  &.restapi{
    bottom: 18%;
    right: 26%
  }
`;
