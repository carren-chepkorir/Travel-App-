import React from "react";
import safaris2 from "../assets/safaris2.jpg";
import safaris3 from "../assets/safaris3.jpg";
import safaris5 from "../assets/safaris5.jpg";
import safaris4 from "../assets/safaris4.jpg";
import safaris7 from "../assets/safaris7.jpg";
import safaris8 from "../assets/safaris8.jpg";
import safaris10 from "../assets/safaris10.jpeg";
import safaris12 from "../assets/safaris12.jpg";
import rate from "../assets/rate.png";
const Explore = () => {
  return (
    <>
      <div className="h-[150vh] md:bg-[url('https://images.unsplash.com/photo-1589820066313-dbb65fcf5a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')] md:bg-cover md:bg-center">
        <div className="flex flex-col ml-20 leading-loose font-bold">
          <h1 className="text-4xl">FIND POPULAR</h1>
          <h1 className="text-4xl text-orange-600">DESTINATIONS</h1>
        </div>
        <div className="grid  grid-cols-5 gap-5 ml-20 mt-10">
          <div>
            <img className="h-[30vh] rounded-lg " src={safaris2} />
            <p>Maasai Mara National Reserve</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>

          <div>
            <img className="h-[30vh] rounded-lg" src={safaris3} />
            <p>Amboseli National Park</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>

          <div>
            <img className="h-[30vh] rounded-lg" src={safaris5} />
            <p>Mount Kenya National Park</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 ml-20 mt-10">
          <div>
            <img className="h-[30vh] rounded-lg" src={safaris8} />
            <p>Nairobi National Park</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>
          <div>
            <img className="h-[30vh] rounded-lg" src={safaris4} />
            <p>Tsavo National Park</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>
          <div>
            <img className="h-[30vh] rounded-lg" src={safaris7} />
            <p>Nakuru National Park</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 ml-20 mt-10">
          <div>
            <img className="h-[30vh] rounded-lg" src={safaris10} />
            <p>Tsavo West National Park</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>
          <div>
            <img className="h-[30vh] rounded-lg" src={safaris10} />
            <p>Nairobi National Park</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>
          <div>
            <img className="h-[30vh] rounded-lg" src={safaris12} />
            <p>Nairobi National Park</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
