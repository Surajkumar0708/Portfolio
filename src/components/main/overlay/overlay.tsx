import { useDispatch } from "react-redux";
import "./overlay.css";
import { videoActions } from "@/components/store/slices/videoSlice/videoSlice";
interface Props {
  close: () => void;
}
const Overlay = ({ close }: Props) => {
  return <div onClick={close} className="overlay"></div>;
};

export default Overlay;
