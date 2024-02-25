"use client";
import "regenerator-runtime/runtime";
import React from "react";
import Overlay from "@/components/main/overlay/overlay";
import VideoIntro from "@/components/main/professional-details/video-intro/video-intro";
import Root from "@/components/root";
import { useDispatch, useSelector } from "react-redux";
import { videoActions } from "@/components/store/slices/videoSlice/videoSlice";
import Swal from "sweetalert2";
import { sweetAlertPopup } from "@/components/websiteTour/driver";
import { useRouter } from "next/navigation";

import "../components/main/professional-details/video-intro/video-intro.css";
import "../app/playarea/playarea.css";
import VoicePopup from "@/components/main/voice-support-popup/voice-support-popup";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isVideoPlay, isMiniPlayer, isFirstTime } = useSelector(
    (state: any) => state.videoSlice
  );
  const { voicePopupVisible } = useSelector((state: any) => state.profileSlice);
  React.useEffect(() => {
    if (!isFirstTime) {
      const timer = setTimeout(() => {
        if (window.innerWidth < 600 && !isFirstTime) {
          dispatch(videoActions.setVideoToPlay(true));
        } else {
          sweetAlertPopup(dispatch, router);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const setToMiniPlayer = () => {
    dispatch(videoActions.setVideoToMiniPlayer(true));
  };
  return (
    <main>
      {isVideoPlay && !isMiniPlayer && <Overlay close={setToMiniPlayer} />}
      {isVideoPlay && <VideoIntro />}
      {voicePopupVisible && <VoicePopup />}
      <Root />
    </main>
  );
}
