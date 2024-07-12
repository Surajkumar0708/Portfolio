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
  const [delay, setDelay] = React.useState<number>(1000);
  const handleChange = (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      if (file) {
        const img = URL.createObjectURL(e.target.files[i]);
        setListOfImages((prev: any) => [...prev, img]);
      }
    }
  };

  React.useEffect(() => {
    if (listOfImages.length > 1) {
      const timer = setTimeout(() => {
        const index =
          currentIndex === listOfImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
        setSelectedImage(listOfImages[currentIndex]);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [listOfImages.length, currentIndex]);

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
  return (
    <div>
      <div className="btn_img_group">
        <div className="carousal_top_section">
          <h3 className="desc-image">{strings.imageSliderDes}</h3>
          <input id="image" type="file" multiple onChange={handleChange} />
          <button>
            <label className="btn" htmlFor="image">
              {strings.uploadImageText}
            </label>
          </button>
          {!!listOfImages?.length && (
            <div className="delay-container">
              <label htmlFor="delay">Please add delay in milliseconds</label>
              <input
                className="delay"
                id="delay"
                type="number"
                onChange={(e) => setDelay(+e?.target?.value)}
              />
            </div>
          )}
        </div>
        <div className="image_box">
          {!!listOfImages?.length &&
            listOfImages?.map((img: any, i: number) => (
              <div className="image_card" key={i}>
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
          <Image
            className="selected_image mx-3"
            src={selectedImage || listOfImages[0]}
            alt="image"
            width={300}
            height={200}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousal;
