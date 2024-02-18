"use client";
import React from "react";
import Overlay from "@/components/main/overlay/overlay";
import VideoIntro from "@/components/main/professional-details/video-intro/video-intro";
import Root from "@/components/root";
import { useDispatch, useSelector } from "react-redux";
import { videoActions } from "@/components/store/slices/videoSlice/videoSlice";
import Swal from "sweetalert2";
import { sweetAlertPopup } from "@/components/websiteTour/driver";

import "../components/main/professional-details/video-intro/video-intro.css";
import "../app/playarea/playarea.css";

export default function Home() {
  // const router = useRouter();
  const dispatch = useDispatch();
  const { isVideoPlay, isMiniPlayer, isFirstTime } = useSelector(
    (state: any) => state.videoSlice
  );
  React.useEffect(() => {
    if (!isFirstTime && window.innerWidth > 600) {
      const timer = setTimeout(() => {
        // dispatch(videoActions.setVideoToPlay(true));
        sweetAlertPopup(dispatch);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <main>
      {isVideoPlay && !isMiniPlayer && <Overlay />}
      {isVideoPlay && <VideoIntro />}
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
      <Root />
    </main>
  );
}
