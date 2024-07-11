"use client";

import React from "react";

import "./footerStyle.css";
import { useSelector } from "react-redux";
import Strings from "../../strings.json";

const Footer: React.FC = () => {
  const { footerColor, footerTextColor } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  return (
    <footer
      style={{ backgroundColor: footerColor, color: footerTextColor }}
      className="footer"
    >
      <p>
        Crafted with &hearts; by SURAJ KUMAR, a frontend developer passionate
        about creating engaging user experiences. Let&apos;s build something
        amazing together!
      </p>
      <p className="bold">No &copy; copy right issues.</p>
      <p className="bold">{Strings.footerDes2}</p>
    </footer>
  );
};

export default Footer;
