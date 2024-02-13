import styled, { keyframes } from "styled-components";

export const SkillsWrapper = styled.div<any>`
  background-color: ${({ props }) => props.bodyColor};
  color: ${({ props }) => props.bodyTextColor};
  height: calc(100vh - 19vh);
  position: relative;
  transition: all 0.6s ease;

  @media only screen and (max-width: 600px) {
    overflow:hidden
  }
`;
export const HeaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 600px) {
    width: 90%;
    top:15%;
  }
`;
export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 800;
  border: 5px dashed red;
  padding: 5px 20px;

  @media only screen and (max-width: 600px) {
    border:none;
    border-bottom: 2px solid red;
  }
`;
export const SkillSection = styled.section`
  height: calc(100vh - 19vh);
  @media only screen and (max-width: 600px) {
    position: relative;
    top:34%
  }
`;

const slideInFromBottom = (top: string, left: string, delay: number, currentTop: string, currentLeft: string) => keyframes`
from {
  top:${top};
  left:${left};
  filter: blur(10px);
  opacity: 0;
  background-color:white;
}
to {
  top:${currentTop};
  left:${currentLeft};  
  filter: blur(0);
  opacity: 1;
  background-color:red;
}
`;
export const Buttons = styled.button`
  border: 1px solid rgba(255, 0, 0, 0.2);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  padding: 9px 12px;
  color:#fff;
  border-radius: 8px;
  transition: all 0.7s ease;
  position: absolute;
  opacity:0;

  &:hover {
    background-color: red;
    transform: scale(1.3);
    box-shadow: 2px 2px 6px 5px rgba(255, 0, 0, 0.4);
  }

  &.react {
    top: 20%;
    left: 10%;
    animation: ${slideInFromBottom("0%", "0%", 0.2, "20%", '10%')} 1.1s 0.2s linear 1 forwards
  }
  &.javascript {
    top: 15%;
    left: 30%;
    animation: ${slideInFromBottom("90%", "10%", 0.6, "15%", '30%')} 1.5s 0.3s linear 1 forwards
  }
  &.typescript {
    top: 25%;
    left: 40%;
    animation: ${slideInFromBottom("100%", "100%", 0.6, "25%", '40%')} 1.6s 0.3s linear 1 forwards
  }
  &.HTML5 {
    top: 45%;
    left: 65%;
    animation: ${slideInFromBottom("100%", "40%", 0.6, "45%", '65%')} 1.3s 0.3s linear 1 forwards
  }
  &.CSS3 {
    top: 15%;
    left: 56%;
    animation: ${slideInFromBottom("100%", "56%", 0.6, "15%", '56%')} 1.2s 0.3s linear 1 forwards
  }
  &.redux {
    top: 75%;
    left: 7%;
    animation: ${slideInFromBottom("100%", "50%", 0.6, "75%", '7%')} 1.7s 0.3s linear 1 forwards
  }
  &.reduxToolkit {
    top: 64%;
    left: 17%;
    animation: ${slideInFromBottom("0%", "100%", 0.6, "64%", '17%')} 1.4s 0.3s linear 1 forwards

  }
  &.github {
    top: 70%;
    left: 38%;
    animation: ${slideInFromBottom("0%", "40%", 0.6, "70%", '38%')} 1.3s 0.3s linear 1 forwards
  }
  &.postman {
    top: 85%;
    left: 53%;
    animation: ${slideInFromBottom("30%", "53%", 0.6, "85%", '53%')} 1.4s 0.3s linear 1 forwards
  }
  &.thunk {
    top: 62%;
    left: 82%;
    animation: ${slideInFromBottom("0%", "40%", 0.6, "62%", '82%')} 1.4s 0.3s linear 1 forwards

  }
  &.styledcomponents {
    top: 23%;
    left: 80%;
    animation: ${slideInFromBottom("50%", "0%", 0.6, "23%", '80%')} 1.1s 0.3s linear 1 forwards
  }
  &.reactnative {
    top: 38%;
    left: 22%;
    animation: ${slideInFromBottom("0%", "30%", 0.6, "38%", '22%')} 1s 0.3s linear 1 forwards
  }
  &.restapi {
    top: 72%;
    left: 69%;
    animation: ${slideInFromBottom("0%", "100%", 0.6, "72%", '69%')} 1s 0.3s linear 1 forwards
  }

  @media only screen and (max-width: 600px) {
    padding: 9px 12px;
    position: static;
    top:20%:
    display:flex;
    margin:3px 6px;
    // animation: none
    transition: all 0.1s ease;
  }
`;
