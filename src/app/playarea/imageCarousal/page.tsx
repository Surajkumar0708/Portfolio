"use client";
import "regenerator-runtime/runtime";
import Image from "next/image";
import React from "react";
import strings from "../../../strings.json";

import "./imageCarousal.css";

const ImageCarousal = () => {
  const [listOfImages, setListOfImages] = React.useState<any>([]);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [selectedImage, setSelectedImage] = React.useState<any>(
    listOfImages[0]
  );
  const [isAutomaticSlider, setIsAutomaticSlider] = React.useState(true);
  const [delay, setDelay] = React.useState<number>(1000);
  const [animationType, setAnimationType] = React.useState("fade");
  const handleChange = (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      if (file) {
        const img = URL.createObjectURL(e.target.files[i]);
        setListOfImages((prev: any) => [...prev, img]);
      }
    }
  };

  console.log("=========== currentIndex", currentIndex);

  React.useEffect(() => {
    if (isAutomaticSlider && listOfImages.length > 1) {
      const timer = setTimeout(() => {
        const index =
          currentIndex === listOfImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
        setSelectedImage(listOfImages[currentIndex]);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [listOfImages.length, currentIndex, isAutomaticSlider]);

  const imageSelected = (i: number) => {
    setCurrentIndex(i);
    setSelectedImage(listOfImages[i]);
  };

  const removeImageFromList = (i: number) => {
    const filteredArr = listOfImages.filter(
      (_: any, index: number) => index !== i
    );
    setListOfImages(filteredArr);
  };

  const sliderChange = (e: any) => {
    const { value } = e?.target;
    setIsAutomaticSlider(value === "automatic");
  };

  const nextBtnClick = () => {
    setCurrentIndex((curr) =>
      listOfImages.length - 1 === curr ? 0 : curr + 1
    );
    setSelectedImage(listOfImages[currentIndex]);
  };
  const prevBtnClick = () => {
    setCurrentIndex((curr) =>
      curr === 0 ? listOfImages?.length - 1 : curr - 1
    );
    setSelectedImage(listOfImages[currentIndex]);
  };

  return (
    <div>
      <div className="btn_img_group">
        <div className="carousal_top_section">
          <h3 className="desc-image">{strings.imageSliderDes}</h3>
          <input id="image" type="file" multiple onChange={handleChange} />
          <button className="btn">
            <label htmlFor="image">{strings.uploadImageText}</label>
          </button>
          {!!listOfImages?.length && (
            <div>
              <div className="delay-container">
                <label htmlFor="delay">
                  Please add delay in milliseconds (1s = 1000ms)
                </label>
                <input
                  className="delay"
                  id="delay"
                  type="number"
                  placeholder={isAutomaticSlider ? "" : "disabled"}
                  disabled={!isAutomaticSlider}
                  onChange={(e) => setDelay(+e?.target?.value)}
                />
              </div>
              <div className="delay-container">
                <label htmlFor="slider">Slider type</label>
                <select
                  className="delay"
                  onChange={sliderChange}
                  name=""
                  id="slider"
                >
                  {/* <option value="">Select</option> */}
                  <option value="automatic">Automatic</option>
                  <option value="manual">Manual</option>
                </select>
              </div>
            </div>
          )}
        </div>
        <div className="image_box">
          {!!listOfImages?.length &&
            listOfImages?.map((img: any, i: number) => (
              <div
                className={`image_card ${
                  currentIndex - 1 === i && "currentSelectedImage"
                }`}
                key={i}
              >
                <div
                  className="remove_image"
                  onClick={() => removeImageFromList(i)}
                >
                  X
                </div>
                <Image
                  src={img}
                  alt="image"
                  width={100}
                  height={200}
                  className="mx-3 small_img_card"
                  onClick={() => imageSelected(i)}
                />
                <h2>{i + 1}</h2>
              </div>
            ))}
          {!!listOfImages?.length && (
            <button
              className="btn clear-all"
              onClick={() => setListOfImages([])}
            >
              Clear All
            </button>
          )}
        </div>
      </div>
      {!!listOfImages.length && (
        <div className="selected_image_box">
          {!isAutomaticSlider && (
            <div onClick={prevBtnClick} className="sliderBtn prevBtn">
              &#x2039;
            </div>
          )}
          <Image
            className={`selected_image mx-3 ${animationType}`}
            src={selectedImage || listOfImages[0]}
            alt="image"
            width={300}
            height={200}
          />
          {!isAutomaticSlider && (
            <div onClick={nextBtnClick} className="sliderBtn nextBtn">
              &#x203a;
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageCarousal;
