import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import image from "../../../../../public/profilePic.jpg";
import { useDispatch, useSelector } from "react-redux";
import { videoActions } from "@/components/store/slices/videoSlice/videoSlice";

import "./rightImage.css";

const ProfilePicture = () => {
  const dispatch = useDispatch();
  const { profilePic } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  const { isVideoPlay, isMiniPlayer, isFirstTime } = useSelector(
    (state: any) => state.videoSlice
  );
  return (
    <Box>
      <Image
        width={350}
        height={100}
        src={profilePic || image}
        alt="Profile Pic"
      />
      {!isVideoPlay && (
        <button
          className="btn introduction-video"
          onClick={() => {
            dispatch(videoActions.setVideoToPlay(true));
          }}
        >
          My Introduction Video
        </button>
      )}
    </Box>
  );
};

export default ProfilePicture;
