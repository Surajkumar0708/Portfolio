"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import video from "../../../../../public/video/"

import "./video-intro.css";
import { videoActions } from "@/components/store/slices/videoSlice/videoSlice";
import Image from "next/image";

const VideoIntro = () => {
  const dispatch = useDispatch();
  const isMiniPlayerEnable = useSelector(
    (state: any) => state.videoSlice.isMiniPlayer
  );

  const setToCloseVideo = () => {
    dispatch(videoActions.setVideoToStop(false));
  };

  const videoPlayerStyle = isMiniPlayerEnable
    ? "video-mini-player"
    : "video_box";
  return (
    <div className={videoPlayerStyle}>
      {isMiniPlayerEnable && (
        <div onClick={setToCloseVideo} className="close">
          <h5>X</h5>
        </div>
      )}
      <video
        controls
        autoPlay
        muted
        loop
        width={isMiniPlayerEnable ? "250" : "560"}
        height={isMiniPlayerEnable ? "150" : "315"}
      >
        <source src="video/findMaxNum.mp4"></source>
      </video>
    </div>
  );
};

export default VideoIntro;
