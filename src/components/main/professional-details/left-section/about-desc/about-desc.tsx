import React from "react";
import String from "../../../../../strings.json";
import { Typography, Box } from "@mui/material";

import "./aboutdesc.css";
import { useSelector } from "react-redux";

const AboutDesc: React.FC = () => {
  const { bodyTextColor } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  return (
    <Box className="about_cont">
      <Typography style={{ color: bodyTextColor }} className="about_text">
        {String.aboutDesc}
      </Typography>
    </Box>
  );
};

export default AboutDesc;
