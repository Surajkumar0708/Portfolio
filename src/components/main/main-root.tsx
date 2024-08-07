"use client";
import React from "react";
import { Box } from "@mui/material";
import ProfileDescription from "./professional-details/left-section/profile-desc";
import ProfilePicture from "./professional-details/rigth-section/right-image";
import Projects from "./personal-projects/projects";
import { useSelector } from "react-redux";

import "./mainRoot.css";
import Contact from "./contact-me/contact-me";

const MainRoot = () => {
  const { bodyColor, bodyTextColor } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  return (
    <main
      style={{
        color: bodyTextColor || "black",
        backgroundColor: bodyColor || "#fff",
      }}
    >
      <div className="main_root">
        <Box sx={{ width: "60%" }}>
          <ProfileDescription />
        </Box>
        <Box sx={{ width: "40%" }}>
          <ProfilePicture />
        </Box>
      </div>
      <div
        style={{
          position: "relative",
          top: 106,
          marginBottom: "100px",
          color: bodyTextColor || "black",
        }}
      >
        <Projects />
      </div>
      <Box sx={{ backgroundColor: "rgb(257, 255, 255)", padding: "5px" }}>
        <Contact />
      </Box>
    </main>
  );
};

export default MainRoot;
