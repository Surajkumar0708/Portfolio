import React from "react";
import Strings from "../../../strings.json";
import Image from "next/image";
import eComImage from "../../../../public/e-commerce.png";
import expenseTracker from "../../../../public/expense-tracker.png";
import Link from "next/link";

import "./projects.css";
import { useSelector } from "react-redux";

const project = {
  name: "E-Commerce",
  thumbnail: eComImage,
  shortDesc: "An E-Commerce Website built for WEB",
};

interface Project {
  id: number;
  name: string;
  thumbnail: any;
  shortDesc: string;
  uri: string;
}
const allProjects: Project[] = [
  {
    id: 1,
    name: "E-Commerce",
    thumbnail: eComImage,
    shortDesc: "An E-Commerce Website with product details with Add to Cart.",
    uri: "https://e-commerce-navy-pi.vercel.app/",
  },
  {
    id: 2,
    name: "Expense Tracker",
    thumbnail: expenseTracker,
    shortDesc:
      "An application which can track you expense throughout the years.",
    uri: "https://expense-tracker-tawny-five.vercel.app/",
  },
  // {
  //   id: 3,
  //   name: "Calculator",
  //   thumbnail: eComImage,
  //   shortDesc: "An E-Commerce Website built for WEB",
  // },
];

const Projects = () => {
  const { projectColor } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  return (
    <section
      style={{ backgroundColor: projectColor }}
      className="projects_container"
    >
      <div className="project_text_container">
        <h3>{Strings.personalProjects}</h3>
      </div>
      <div className="projects_item_container">
        {allProjects.map((project: Project) => (
          <a
            target="_blank"
            href={project?.uri}
            key={project.id}
            className="project_details"
          >
            <h2 className="project_item">{project?.name}</h2>
            <Image
              className="project_image"
              width={200}
              src={project?.thumbnail}
              alt="project-thumbnail"
            />
            <p>{project?.shortDesc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
