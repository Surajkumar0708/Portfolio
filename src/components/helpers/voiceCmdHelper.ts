import { videoActions } from "../store/slices/videoSlice/videoSlice";

export const playVideoBySpeech = (
  speech: string,
  dispatch: any,
  resetSpeech: any
) => {
  const playRegex = /\b(play)\b/gi;
  const videoRegex = /\b(video)\b/gi;
  const closeRegex = /\b(close)\b/gi;

  const playExist = playRegex.test(speech);
  const videoExist = videoRegex.test(speech);
  const closeExist = closeRegex.test(speech);

  console.log("=========== test", playExist, videoExist, closeExist);
  if (playExist && videoExist) {
    dispatch(videoActions.setVideoToPlay(true));
    resetSpeech();
  } else if (closeExist && videoExist) {
    dispatch(videoActions.setVideoToPlay(false));
    resetSpeech();
  }
};
