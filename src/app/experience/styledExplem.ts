import styled, { keyframes } from "styled-components";

const animationStyle = `
font-weight: 700;
  transform: translateY(50px);
  filter: blur(20px);`

const slider = keyframes`
    to{
        opacity: 1;
        filter: blur(0);
        transform: translateX(0)
    }
`;
export const ExpWrapper = styled.div`
  transition: 0.5s;
`;
export const ExpContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    padding: 20px;
    border-bottom: 2px solid black;
    margin: 0 20px;

    &:last-child {
      border: none;
    }
`;
export const HeaderContainer = styled.div``;
export const H1 = styled.h1`
  font-size: 25px;
  font-weight: 700;
  transform: translateX(-250px);
  filter: blur(20px);
  opacity: 0;
  animation: ${slider} 0.7s 0.3s linear 1 forwards;
`;
export const DescContainer = styled.div``;
export const LeftContainer = styled.div`
    width: 38%;
    padding: 0 7px;
    
`;
export const ImgContainer = styled.div`
    width: 30%;
    box-shadow: 10px 15px 5px 5px rgba(0,0,0,0.3);
    transform: translateX(250px);
  filter: blur(20px);
  opacity: 0;
  animation: ${slider} 0.7s 0.3s linear 1 forwards;
`;
export const DescPara = styled.p`
  transform: translateX(-250px);
  filter: blur(20px);
  opacity: 0;
  animation: ${slider} 1.2s 0.3s linear 1 forwards;
  margin: 10px 0;
  font-weight: 500;
  color: #acaaaa
`;
export const Para = styled.p`
transform: translateX(-250px);
  filter: blur(20px);
  opacity: 0;
  animation: ${slider} 0.9s 0.3s linear 1 forwards;
`;
export const ListItem = styled.li`
display: inline-flex;
  transform: translateY(50px);
  filter: blur(20px);
  opacity: 0;
  animation: ${slider} 0.5s 0.3s linear 1 forwards;
  animation-delay: 0.6s;
  color: #acaaaa;
  font-weight: 700;
  margin-right: 13px;
  text-decoration: underline;
  
  &.list-0 {
    animation-delay: 1.2s;
  }
  &.list-1 {
    animation-delay: 1.3s;
  }
  &.list-2 {
    animation-delay: 1.4s;
  }
  &.list-3 {
    animation-delay: 1.5s;
  }
  &.list-4 {
    animation-delay: 1.6s;
  }
  &.list-5 {
    animation-delay: 1.7s;
  }
  &.list-6 {
    animation-delay: 1.8s;
  }
  &.list-7 {
    animation-delay: 1.9s;
  }
`;
