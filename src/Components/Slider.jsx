import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Data from "../Data/Data";
const Slider = () => {
  const MyData = Data;
  const [activeslide, setactiveslide] = useState(1);
  return (
    <div className="m-6">
      {MyData.map((item) => {
        const { id, image, title, Message } = item;
        return (
          <div
            key={id}
            className={
              activeslide === id ? "flex justify-items-center" : "hidden"
            }
          >
            <button className="text-4xl border-1 border-black">
              <FiChevronLeft />
            </button>
            <div className="flex flex-col items-center">
              <img src={image} alt={title}></img>
              <h2>{id}</h2>
              <h3>{title}</h3>
              <p>{Message}</p>
            </div>
            <button className="border-black text-4xl">
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
