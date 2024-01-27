"use client";
import React from "react";
import MainRoot from "./main/main-root";
import { useDispatch } from "react-redux";
import { videoActions } from "./store/slices/videoSlice/videoSlice";

const Root = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(videoActions.setVideoToPlay(true));
    }, 5000);
  }, []);
  return (
    <React.Fragment>
      <MainRoot />
    </React.Fragment>
  );
};

export default Root;
