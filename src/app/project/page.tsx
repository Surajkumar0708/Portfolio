"use client";
import "regenerator-runtime/runtime";
import React from "react";
import { useSelector } from "react-redux";

const Project = () => {
  const { bodyColor, bodyTextColor } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  return (
    <div
      style={{ backgroundColor: bodyColor, color: bodyTextColor }}
      className="project_container"
    >
      Project test
    </div>
  );
};

export default Project;
