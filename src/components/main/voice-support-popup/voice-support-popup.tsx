import React from "react";
import Overlay from "../overlay/overlay";
import { FaMicrophone } from "react-icons/fa";

import "./voiceSupportPopup.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useDispatch } from "react-redux";
import { profileActions } from "@/components/store/slices/profileSlice/profileSlice";
interface Props {
  open: boolean;
}
const VoicePopup = () => {
  const dispatch = useDispatch();

  const closeVoicePopup = () => {
    dispatch(profileActions.setVoicePopupVisible(false));
  };
  const startMic = () => {
    SpeechRecognition.startListening({ continuous: true });
    closeVoicePopup();
  };
  return (
    <React.Fragment>
      <Overlay close={closeVoicePopup} />
      <div className="voice_popup">
        <div className="mic_icon">
          <FaMicrophone />
        </div>
        <div className="voice_cmds">
          <div className="limitations">
            <span>Note: This feature has some limitation </span>
            <ul>
              <li>1: You can navigate through different pages</li>
              <li>2: You can play and close the introduction video</li>
              <li>3: You can go to social pages</li>
            </ul>
          </div>
          <h3>Please use Phrases like mentioned below :-</h3>
          <p>
            Go to <strong>Skills</strong>
          </p>
          <p>
            come back to <strong>Profile</strong>
          </p>
          <p>
            For Video - use <strong>PLAY</strong> and <strong>VIDEO</strong>{" "}
            both in your phrase same for <strong>CLOSE</strong>
          </p>
        </div>
        <div className="voice_btns">
          <button className="btn" onClick={startMic}>
            Start
          </button>
          <button className="btn" onClick={closeVoicePopup}>
            Cancel
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VoicePopup;
