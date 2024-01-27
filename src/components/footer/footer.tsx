"use client";

import React from "react";

import "./footerStyle.css";
import { useSelector } from "react-redux";

const Footer: React.FC = () => {
  const { footerColor, footerTextColor } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  return (
    <footer
      style={{ backgroundColor: footerColor, color: footerTextColor }}
      className="footer"
    >
      <div>
        <h2>@Suraj Kumar</h2>
      </div>
      <div className="right_footer">
        <ul>
          <li>dummy</li>
          <li>dummy</li>
          <li>dummy</li>
          <li>dummy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
