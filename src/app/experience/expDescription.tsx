import React from "react";
import { DescPara } from "./styledExplem";

const ExpDescription = (props: any) => {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    window.innerWidth < 600
  );
  const [isReadMore, setIsReadMore] = React.useState(false);
  const getDescription = () => {
    if (isMobile) {
      return isReadMore ? props.desc : props.desc.substring(0, 190);
    }
    return props.desc;
  };
  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth < 600);
  });
  return (
    <DescPara>
      {getDescription()}
      {isMobile && (
        <button onClick={() => setIsReadMore((prev) => !prev)}>
          {isReadMore ? "...Read less" : "...Read more"}
        </button>
      )}
    </DescPara>
  );
};

export default ExpDescription;
