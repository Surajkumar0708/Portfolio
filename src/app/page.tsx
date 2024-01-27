"use client";
import Overlay from "@/components/main/overlay/overlay";
import VideoIntro from "@/components/main/professional-details/video-intro/video-intro";
import Root from "@/components/root";
import { useSelector } from "react-redux";

export default function Home() {
  const { isVideoPlay, isMiniPlayer } = useSelector(
    (state: any) => state.videoSlice
  );
  return (
    <main>
      {isVideoPlay && !isMiniPlayer && <Overlay />}
      {isVideoPlay && <VideoIntro />}
      <Root />
    </main>
  );
}
