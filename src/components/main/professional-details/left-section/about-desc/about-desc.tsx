import React from "react";
import String from "../../../../../strings.json";
import { Typography, Box, Button } from "@mui/material";

import "./aboutdesc.css";
import { useDispatch, useSelector } from "react-redux";
import { videoActions } from "@/components/store/slices/videoSlice/videoSlice";
import { sweetAlertPopup } from "@/components/websiteTour/driver";
import { useRouter } from "next/navigation";

const AboutDesc: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isMobileView, setIsMobileView] = React.useState<boolean>(false);
  const { bodyTextColor } = useSelector(
    (state: any) => state.custSlice.formValues
  );

  React.useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMobileView(window.innerWidth < 600);
    }
    window.addEventListener("resize", () => {
      setIsMobileView(window.innerWidth < 600);
    });

    return () =>
      window.removeEventListener("resize", () => {
        setIsMobileView(false);
      });
  }, []);

  console.log("========= test ismobile", isMobileView);

  const tourStart = () => {
    dispatch(videoActions.setFirstTime(false));
    sweetAlertPopup(dispatch, router);
  };
  const btnClass = isMobileView ? "disabled" : "tour_btn";
  return (
    <Box className="about_cont">
      <Typography style={{ color: bodyTextColor }} className="about_text">
        {String.aboutDesc}
      </Typography>
      {
        <button
          disabled={isMobileView}
          onClick={tourStart}
          className={btnClass}
        >
          Start Tour
        </button>
      }
    </Box>
  );
};

export default AboutDesc;
