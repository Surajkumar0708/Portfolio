import { useDispatch } from "react-redux";
import "./overlay.css";
import { videoActions } from "@/components/store/slices/videoSlice/videoSlice";

const Overlay = () => {
  const dispatch = useDispatch();
  const setToCloseVideo = () => {
    dispatch(videoActions.setVideoToMiniPlayer(true));
  };
  return <div onClick={setToCloseVideo} className="overlay"></div>;
};

export default Overlay;
