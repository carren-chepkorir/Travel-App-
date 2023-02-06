import React from "react";
// import Giraffe from "../assets/Girrafe.jpg";
import { Link } from "react-router-dom";
import Kip from "../assets/kip.jpeg";
import fireball from "../assets/fireball.jpg";
import fireball2 from "../assets/fireball2.jpeg";
import fireball3 from "../assets/fireball3.jpeg";
const HeroSection = () => {
  return (
    <>
      <div className="h-[100vh] md:bg-[url('assets/safaris.jpg')] md:bg-cover bg-center flex flex-col">
        <div className="grid md:h-5/6 place-content-center">
          <p className="md:text-center font-bold text-8xl outline-8">
            LIVE YOUR
          </p>
          <p className="md:text-center text-orange-700 font-bold text-8xl">
            ADVENTURE
          </p>
          <p className="text-white text-2xl max-w-xl text-center">
            Dont wait until tomorrow,Discover your adventure now and feel the
            sensation of closeness to nature around you
          </p>
        </div>
        <div className=" flex align-center justify-around">
          <button className="text-black py-4 px-7 leading- loose text-3xl bg-orange-300 rounded  hover:bg-orange-500 focus:outline-none">
            Location
            <p>Nairobi,Kenya </p>
          </button>

          <Link to="/Discover">
            <button className="bg-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-400 text-xl rounded py-5 px-10 text-center mr-2 mb-2 dark:focus:ring-orange-900">
              Explore
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <p className="text-black text-5xl ml-20 text-bold animate-bounce  mt-10">
          Explore beauty of your journey
        </p>
        <div className="flex">
          <img
            className=" mt-10 ml-20 w-[550px] h-[400px] rounded-lg"
            src={Kip}
            alt={Kip}
          />
          <div className="flex-1 p-2 flex">
            <img className="h-[150px] w-[150px] rounded m-20" src={fireball} />
            <div className="flex flex-col p-2">
              <div className="flex ">
                <div className="flex-3  p-4">
                  <p className="ml-20   leading-loose text-3xl text-center text-bold">
                    START YOUR NEW ADVENTURE
                  </p>
                  <p className=" text-orange-600 ml-20 text-3xl leading-loose text-center text-bold">
                    AROUND THE WORLD
                  </p>
                  <p className="leading-loose text-center">
                    There are still many amazing destinations <br />
                    scattered around Kenya,you should try
                    <br /> to visit all of them
                  </p>
                </div>
                <div className="flex-1 grid place-content-center">
                  <img className="h-[50px] w-[50px] m-20" src={fireball2} />
                </div>
              </div>
              <div className="grid h-[20vh] place-content-center">
                <img
                  className="h-[100px] w-[100px] ml-20 mr-20 "
                  src={fireball3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
