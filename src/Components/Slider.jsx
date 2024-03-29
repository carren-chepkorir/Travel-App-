import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Data from "../Data/Data";
const Slider = () => {
  const MyData = Data;
  const [activeSlide, setActiveSlide] = useState(1);
  const prevSliderHandler = (id) => {
    if (id === 1) {
      setActiveSlide(MyData.length);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(MyData.length - 1);
    }
  };
  const nextSliderHandler = (id) => {
    if (id === MyData.length) {
      setActiveSlide(1);
    } else if (id >= 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(MyData.length - 1);
    }
  };

  return (
    <div className="m-2">
      {MyData.map((item) => {
        const { id, image, title, Message } = item;
        return (
          <div
            key={id}
            className={
              activeSlide === id
                ? "flex justify-between items-center"
                : "hidden"
            }
          >
            <button
              className="text-4xl border-1 border-black md:ml-20 "
              onClick={() => prevSliderHandler(id)}
            >
              <FiChevronLeft />
            </button>
            <div className="md:flex flex-col justify-center items-center mt-6">
              <img
                className="md:h-[300px] md:max-w-[600px] rounded-lg"
                src={image}
                alt={title}
              ></img>
              <h2>{id}</h2>
              <h2 className="font-bold">{title}</h2>
              <p>{Message}</p>
            </div>
            <button
              className="border-black text-4xl p-1"
              onClick={() => nextSliderHandler(id)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
