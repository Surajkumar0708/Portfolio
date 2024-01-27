"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ProfileDescription from "./professional-details/left-section/profile-desc";
import ProfilePicture from "./professional-details/rigth-section/right-image";
import Projects from "./personal-projects/projects";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

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
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          position: "relative",
          top: 55,
        }}
      >
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
    </main>
  );
};

export default MainRoot;
