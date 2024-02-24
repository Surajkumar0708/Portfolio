"use client";
import "regenerator-runtime/runtime";
import React from "react";
import { useSelector } from "react-redux";
import {
  SkillsWrapper,
  HeaderContainer,
  H2,
  SkillSection,
  Buttons,
} from "./styledElement";

const skills = [
  { text: "React JS", class: "react" },
  { text: "React Native", class: "reactnative" },
  { text: "Javascript", class: "javascript" },
  { text: "TypeScript", class: "typescript" },
  { text: "HTML5", class: "HTML5" },
  { text: "CSS3", class: "CSS3" },
  { text: "Redux", class: "redux" },
  { text: "Redux Toolkit", class: "reduxToolkit" },
  { text: "Github", class: "github" },
  { text: "Postman", class: "postman" },
  { text: "Thunk", class: "thunk" },
  { text: "Styled Components", class: "styledcomponents" },
  { text: "Rest APIs", class: "restapi" },
];

const Skills = () => {
  const formValues = useSelector((state: any) => state.custSlice.formValues);
  return (
    <SkillsWrapper props={formValues}>
      <HeaderContainer>
        <H2>These are my skills</H2>
      </HeaderContainer>
      <SkillSection>
        {skills.map((btn) => (
          <Buttons key={btn.class} className={btn.class}>
            {btn.text}
          </Buttons>
        ))}
      </SkillSection>
    </SkillsWrapper>
  );
};

export default Skills;
