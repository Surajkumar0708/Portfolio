"use client";
import React from "react";
import MainRoot from "./main/main-root";
import { useDispatch } from "react-redux";
import { videoActions } from "./store/slices/videoSlice/videoSlice";

const Root = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(videoActions.setVideoToPlay(true));
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      <MainRoot />
    </React.Fragment>
  );
};

export default Root;
