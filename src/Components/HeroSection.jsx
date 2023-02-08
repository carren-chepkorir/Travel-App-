import React from "react";
// import Giraffe from "../assets/Girrafe.jpg";
import { Link } from "react-router-dom";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaFacebook, FaTiktok, FaWhatsapp, FaPhone } from "react-icons/fa";
import Kip from "../assets/kip.jpeg";
import fireball from "../assets/fireball.jpg";
import fireball2 from "../assets/fireball2.jpeg";
import fireball3 from "../assets/fireball3.jpeg";
import Travel1 from "../assets/Travel 1.jpg";
import Slider from "./Slider";
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
      <div className="h-[80vh] ">
        <p className="text-black text-5xl ml-20 text-bold animate-bounce  mt-10 hover:text-orange-500">
          Explore beauty of your journey
        </p>
        {/* <AiOutlineArrowRight size="40px" color="orange"  /> */}

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
                  <p className="ml-20   leading-loose text-3xl text-center text-bold ">
                    START YOUR NEW ADVENTURE
                  </p>
                  <p className=" text-orange-600 ml-20 text-3xl leading-loose text-center text-bold">
                    AROUND THE WORLD
                  </p>
                  <p className=" ml-20 leading-loose text-center">
                    There are still many amazing destinations <br />
                    scattered around Kenya,you should try
                    <br /> to visit all of them
                  </p>
                </div>
                <div className="flex-1 grid place-content-center">
                  <img className="h-[150px] w-[150px] m-20" src={fireball2} />
                </div>
              </div>
              <div className="grid h-[20vh] place-content-center">
                <img
                  className="h-[150px] w-[150px]  mr-20 rounded "
                  src={fireball3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <div className="items-center ml-20 ">
            <p className="text-bold text-4xl mt-0">WHAT ADVENTURERS </p>
            <p className="text-bold text-orange-600 text-4xl">SAY ABOUT US</p>
          </div>
          <div className="flex-1 ml-20 mt-10 leading-loose text-xl">
            <p>
              See and adventure what adventurers tell us <br />
              about their journey with us,we always listen
              <br />
              to whatever experience they have to say
            </p>
          </div>
          <Slider />
        </div>
        <div className="flex-1 flex-col">
          <img
            className="h-[480px] w-[750px] flex rounded-lg ml-20"
            src={Travel1}
          />
          <div className="flex">
            <div className=" flex-1 mt-20 ml-20">
              <RiDoubleQuotesL size="30" />
            </div>
            <div className=" flex-1 mt-20 ml-20">
              <RiDoubleQuotesR size="30" />
            </div>
          </div>

          <p className="ml-[170px] text-2xl text-bold italic ">
            Always say yes to new adventures
          </p>
          <p className="ml-[170px] text-2xl text-bold italic leading-loose">
            Keep Calm and Travel on
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center bg-orange-100  h-[220px] w-[1600px] rounded-lg mt-20 ml-20">
          <div className="">
            <h1 className="text-bold text-4xl leading-loose">
              GET STARTED WITH KIP
            </h1>
            <p>
              Get in Touch and find super attractive price quotes
              <br />
              from us,wait for you at the best destination
            </p>
          </div>
          <Link to="/Discover">
            <button className="py-2 px-5  items-center rounded-lg cursor-pointer hover:bg-orange-100 text-black text-2xl bg-orange-600 animate-bounce mt-10">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className=" flex ">
        <div className="ml-20 mt-10 flex-1 ">
          <p>
            My mission is to make everyone
            <br /> able to feel the attachement <br />
            back to nature by providing an <br />
            unforgottable experience
          </p>
          <p className="mt-5">
            &copy; {new Date().getFullYear()} TRLVS .All rights reserved
          </p>
        </div>
        <div className="items-center mt-20 ml-3 text-2xl text-bold">
          <p>Get In Touch With Me</p>
        </div>
        <div className=" flex flex-1 mt-20 space-x-6 cursor-pointer ">
          <a href="tel:+254742295861">
            <FaPhone color="#1771e6" size="50" />
          </a>
          <a href="https://wa.me/254742295861">
            <FaWhatsapp color="green" size="50" />
          </a>

          <FaTiktok size="50" />

          <FaFacebook color="#1771e6" size="50" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
