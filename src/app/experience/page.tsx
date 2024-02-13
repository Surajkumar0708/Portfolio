"use client";

import React from "react";
import {
  ExpWrapper,
  ExpContainer,
  HeaderContainer,
  H1,
  DescContainer,
  DescPara,
  ListItem,
  ImgContainer,
  Para,
  LeftContainer,
} from "./styledExplem";
import { projects } from "./experienceDummyData";
import Image from "next/image";

const Experience = () => {
  const renderProjects = (project: any) => {
    return (
      <ExpContainer key={project.name}>
        <LeftContainer>
          <HeaderContainer>
            <H1>{project.designation}</H1>
            <Para>
              <u>
                <i>{project.from} - </i> <i> {project.to}</i>
              </u>
            </Para>
          </HeaderContainer>
          <DescContainer>
            <DescPara>{project.projectDesc}</DescPara>
            <ul>
              {project.usedSkills.map((skill: any, i: number) => (
                <ListItem key={skill} className={`list-${i}`}>
                  {skill}
                </ListItem>
              ))}
            </ul>
          </DescContainer>
        </LeftContainer>
        <ImgContainer>
          <Image className="img_test" src={project.imagePath} alt="project" />
        </ImgContainer>
      </ExpContainer>
    );
  };
  return (
    <ExpWrapper>
      {projects?.map((project) => renderProjects(project))}
    </ExpWrapper>
  );
};

export default Experience;
