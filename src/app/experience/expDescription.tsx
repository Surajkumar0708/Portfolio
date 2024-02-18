import React from "react";
import { DescPara } from "./styledExplem";

const ExpDescription = (props: any) => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [isReadMore, setIsReadMore] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 600);
    });

    return () =>
      window.removeEventListener("resize", () => {
        setIsMobile(false);
      });
  }, []);
  const getDescription = () => {
    if (isMobile) {
      return isReadMore ? props.desc : `${props.desc.substring(0, 190)}... `;
    }
    return props.desc;
  };

  return (
    <DescPara>
      {getDescription()}
      {isMobile && (
        <button
          style={{ color: "blue" }}
          onClick={() => setIsReadMore((prev) => !prev)}
        >
          {isReadMore ? "Read less" : "Read more"}
        </button>
      )}
    </DescPara>
  );
};

export default ExpDescription;
