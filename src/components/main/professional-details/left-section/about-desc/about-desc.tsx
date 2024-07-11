import React from "react";
import String from "../../../../../strings.json";
import { Typography, Box } from "@mui/material";

import "./aboutdesc.css";
import { useDispatch, useSelector } from "react-redux";
import { videoActions } from "@/components/store/slices/videoSlice/videoSlice";
import { sweetAlertPopup } from "@/components/websiteTour/driver";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { getExpYearsAndMonths } from "@/components/helpers/common";

const AboutDesc: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isMobileView, setIsMobileView] = React.useState<boolean>(false);
  const { bodyTextColor } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  const experience = getExpYearsAndMonths();

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

  const tourStart = () => {
    if (isMobileView) {
      Swal.fire({
        text: "This feature is not supported in mobile",
        confirmButtonColor: "red",
        confirmButtonText: "Ok",
      });
      return;
    }
    dispatch(videoActions.setFirstTime(false));
    sweetAlertPopup(dispatch, router);
  };
  const btnClass = isMobileView ? "disabled" : "tour_btn";
  return (
    <Box className="about_cont">
      <Typography style={{ color: bodyTextColor }} className="about_text">
        {`${String.aboutDesc1} ${experience?.years}${
          experience?.months ? "." : ""
        }${experience?.months || ""} ${String.aboutDesc2} `}
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
