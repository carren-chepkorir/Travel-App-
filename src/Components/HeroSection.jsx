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
      <div className="h-[100vh]  bg-[url('assets/safaris.jpg')] bg-cover bg-center flex flex-col">
        <div className="flex flex-wrap justify-center items-center flex-col mt-10  ">
          <p className="md:font-bold md:text-8xl md:flex-col">LIVE YOUR</p>
          <p className=" md:text-orange-700 font-bold md:text-8xl md:flex-col">
            ADVENTURE
          </p>

          <p className="text-white md:text-2xl max-w-xl text-center">
            Dont wait until tomorrow,Discover your adventure now and feel the
            sensation of closeness to nature around you
          </p>
        </div>
        <div className=" ml-[150px] md:flex justify-center items-center mt-20">
          <Link to="/Discover">
            <button className="bg-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-400 text-xl rounded-full py-3 px-10 text-center mr-2 mb-2 dark:focus:ring-orange-900">
              Explore
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center items-center  leading-loose p-5 md:flex-col">
        <h1 className="text-black text-2xl md:text-2xl text-bold animate-pulse font-bold  hover:text-orange-500">
          Explore beauty of your journey
        </h1>
        {/* <AiOutlineArrowRight size="40px" color="orange"  /> */}

        <h1>Kenyan Best Tour Company</h1>
        <p>
          <span className="text-orange-500 font-bold"> Creatify Safaris</span>{" "}
          is the among the Best Tour and Travel Company in Kenya.<br></br>We
          provide tour and travel solutions to{" "}
          <span className="text-orange-500">Corporate Organisation </span>
          and Individuals
        </p>
        <p>
          Are you a Kenyan national or an expat living in Kenya?We can help you
          explore the beautiful part of Kenya
        </p>
        <p>
          We are ready to serve you always.We will help you book your
          hotels,book flights,organize Airport transfers and choose for
          <br />
          you the best destinations you will enjoy.You can explore,meet new
          people nad make lasting memories
        </p>
      </div>
      <div className="flex flex-wrap p-5">
        <div className="md:flex-1 flex  flex-col md:ml-20">
          <div className=" flex flex-wrap justify-center items-center flex-col ">
            <div className="">
              <p className="md:font-bold md:text-4xl  ">WHAT ADVENTURERS </p>
              <p className="md:font-bold text-orange-600 md:text-4xl ">
                SAY ABOUT US
              </p>
            </div>
            <p className="leading-loose ">
              See and adventure what adventurers tell us about their journey
              with us,we always listen to whatever experience they have to say
            </p>
          </div>

          <Slider />
        </div>

        <div className="md:flex-1 flex-wrap flex-col flex justify-center items-center">
          <img
            className="md:h-[480px] w-[750px] rounded-lg md:ml-20"
            src={Travel1}
          />
          {/* <div className="flex">
            <div className=" flex-1 mt-20 ">
              <RiDoubleQuotesL size="30" />
            </div>
            <div className=" flex-1 mt-20 ml-20">
              <RiDoubleQuotesR size="30" />
            </div>
          </div> */}

          <p className="md:ml-[170px] md:text-2xl text-bold italic ">
            Always say yes to new adventures
          </p>
          <p className="md:ml-[170px] md:text-2xl text-bold italic leading-loose">
            Keep Calm and Travel on
          </p>
        </div>
      </div>

      <div className="bg-[#f1f5f9]">
        <div className="flex flex-col justify-center items-center rounded-lg mt-20 md:ml-20">
          <div className="">
            <h1 className="md:font-bold md:text-4xl leading-loose">
              GET STARTED WITH CREATIFY
            </h1>
            <p>
              Get in Touch and find super attractive price quotes from us,wait
              for you at the best destination
            </p>
          </div>
          <Link to="/Discover">
            <button className="py-2 px-5 text-white  items-center rounded-full cursor-pointer hover:bg-orange-100 text-2xl bg-orange-600 animate-pulse mt-10">
              See More
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap flex-row space-x-3 mt-10">
          <div className="  md:justify-center items-center flex flex-wrap mt-10  flex-col ">
            <p className="max-w-[40%]">
              Our mission is to make everyone able to feel the attachement back
              to nature by providing an unforgottable experience
            </p>
            <p className="mt-5 max-w-[40%] ">
              &copy; {new Date().getFullYear()} Creatify.All rights reserved
            </p>
          </div>
          <div className="mt-10">
            <p className="items-center  text-2xl font-bold">
              Get In Touch With Us
            </p>

            <div className=" flex flex-1 mt-5 space-x-10 cursor-pointer ">
              <a href="tel:+254742295861">
                <FaPhone color="black" size="50" />
              </a>
              <a href="https://wa.me/254742295861">
                <FaWhatsapp color="black" size="50" />
              </a>

              <a href="" className="href">
                <FaTiktok size="50" color="black" />
              </a>

              <a href="https://www.facebook.com/Kipshariff" className="href">
                <FaFacebook color="black" size="50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
