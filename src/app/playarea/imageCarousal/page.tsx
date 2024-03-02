"use client";

import Image from "next/image";
import React from "react";
import strings from "../../../strings.json";

import "./imageCarousal.css";

const ImageCarousal = () => {
  const [listOfImages, setListOfImages] = React.useState<any>([]);
  const [currentIndex, setCurrentIndex] = React.useState<any>(0);
  const [selectedImage, setSelectedImage] = React.useState<any>(
    listOfImages[0]
  );
  const handleChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const img = URL.createObjectURL(e.target.files[0]);
      setListOfImages((prev: any) => [...prev, img]);
    }
  };

  React.useEffect(() => {
    if (listOfImages.length > 1) {
      const timer = setTimeout(() => {
        const index =
          currentIndex === listOfImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
        setSelectedImage(listOfImages[currentIndex]);
      }, 1000);

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
          <h3>Please upload your pictures to create Carousal</h3>
          <input id="image" type="file" onChange={handleChange} />
          <button>
            <label className="btn" htmlFor="image">
              {strings.uploadImageText}
            </label>
          </button>
        </div>
        <div className="image_box">
          {!!listOfImages.length &&
            listOfImages.map((img: any, i: number) => (
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
