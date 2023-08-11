import React from "react";
import { Link } from "react-router-dom";
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
      <div className="h-[150vh] scroll-smooth md:bg-[url('https://images.unsplash.com/photo-1589820066313-dbb65fcf5a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')] md:bg-cover md:bg-center">
        <div className="flex flex-wrap">
          <div className="flex  flex-1 flex-col ml-20 leading-loose font-bold">
            <h1 className=" md:text-4xl 5s steps(30, end), blink .75s step-end infinite ">
              FIND POPULAR
            </h1>
            <h1 className="md:text-4xl text-orange-600 animate-pulse">
              DESTINATIONS
            </h1>
          </div>
          <div className="flex flex-wrap">
            <div className="  md:ml-[400px] flex  flex-1 flex-row m-2 ">
              <div className="  md:text-2xl items-center ">
                <img className="animate-pulse" src={rate} />
              </div>
              <div className="flex flex-col md:text-2xl ">
                <p>
                  Plan your best trip ever with Creatify Safaris <br />
                  We’ve got everything you need to go big in{" "}
                  {new Date().getFullYear()}
                </p>
                <p>Find your best destinstions and Travel with Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid  grid-cols-5 gap-5 m-5 mt-10 mb-0">
          <div>
            <img className="h-[30vh] rounded-lg " src={safaris2} />
            <p>Maasai Mara National Reserve</p>
            <div className="flex flex-row animate-pulse  ">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <p className="ml-5 font-bold">7.8</p>
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
          <div className="md:ml-20">
            <Link to="/Contact">
              <button className="bg-orange-600 py-5 px-6 text-center rounded-lg animate-bounce">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="md:grid grid-cols-5 gap-5 m-5 mt-10">
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
        <div className="md:grid grid-cols-5 gap-5 m-5 mt-10">
          <div>
            <img className="h-[30vh] rounded-lg" src={safaris10} />
            <p>Tsavo West National Park</p>
            <div className="flex f} lex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>
          <div>
            <img className="h-[30vh] rounded-lg" src={safaris10} />
            <p>Aberdare National Park</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>

          <div>
            <img className="h-[30vh] w-[400px] rounded-lg" src={safaris12} />
            <p>Samburu National Park</p>
            <div className="flex flex-row animate-pulse hover:">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
          </div>
        </div>
        <div className=" md:flex flex-wrap flex-row container mr-[500px] bg-orange-100">
          <div className="flex flex-wrap">
            <h1 className="font-bold">ENJOY THE EXCLUSIVE EXPERIENCE</h1>

            <p className=" md: leading-loose  ">
              Enjoy a magnificent collection of wild animals, stunning landscape
              with wide open spaces for as far as the eye can see, superb year{" "}
              round climate and internationally acclaimed accommodation which{" "}
              ranges from exclusive luxury Tented Camps and safari lodges to{" "}
              budget camping options
            </p>
          </div>
          <div className="md:leading-loose flex flex-wrap ">
            <p className="">
              Enjoy the freedom to determine your family’s preferred Creatify
              tour schedule which could include activities like game drives,
              guided nature walks, helicopter flights We also have very
              rewarding destination if you’re looking for something a little off
              the beaten path while still offering superb game viewing and
              exemplary accommodation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
