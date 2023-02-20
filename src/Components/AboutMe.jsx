import React from "react";
import kip from "../assets/kip.jpeg";
import Slider2 from "./Slider2";
import caption1 from "../assets/caption1.jpg";
import caption2 from "../assets/caption2.jpg";
import caption3 from "../assets/caption3.jpg";
import caption4 from "../assets/caption4.jpg";
import caption5 from "../assets/caption5.jpg";
import caption6 from "../assets/caption6.jpg";
import caption7 from "../assets/caption7.jpg";
import caption8 from "../assets/caption8.jpg";
const AboutMe = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex ">
        <div className=" ml-10 flex flex-1 text-white flex-col md:bg-[url(https://images.unsplash.com/photo-1483470873734-93599652a354?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]">
          <h1 className="font-bold text-4xl leading-loose">About Us</h1>
          <p className="leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Veritatis officiis fugit ipsam nihil. Corporis sequi nesciunt,
            <br /> ipsum nobis tempora accusamus molestiae! In dolorum error
            <br />
            laudantium dolorem amet commodi voluptatum accusamus minima deleniti
            <br /> iusto eum, itaque mollitia accusantium nostrum animi?
            Doloremque.
          </p>
        </div>
        <div className="flex flex-1 flex-col">
          <img className="h-[600px] w-[700px] ml-20 rounded-lg " src={kip} />
          <p className="italic ml-20 font-bold">
            Always say yes to new adventures <br />
            An adventure is only an inconvenience rightly considered." —G.K.
            Chesterton
          </p>
        </div>
      </div>
      <div className="ml-10">
        <h2 className=" font-bold text-2xl  text-orange-600 ">
          Have you been here?
        </h2>
        <h2 className="font-bold text-2xl">This is where to go right now</h2>
        <p>Don’t miss the list of Epic Adventure that spark your Wanderlust!</p>
      </div>

      <div className="container m-auto">
        <Slider2 />
      </div>
      <div className="mt-5 flex flex-col">
        <p className="text-2xl font-bold">Recommended For You</p>
        <div className="flex flex-row container m-auto space-x-6">
          <div className="flex flex-col">
            <img src={caption1} />
            <p>Girrafe Center Nairobi</p>
          </div>
          <div className="flex flex-col">
            <img src={caption2} />
            <p>Maasai Village Day Tour</p>
          </div>
          <div className="flex flex-col">
            <img src={caption3} />

            <p>Nairobi Story Telling Tour</p>
          </div>
          <div className="flex flex-col">
            <img src={caption4} />
            <p>Elephant Trust Center</p>
          </div>
        </div>

        <div className="flex flex-row container m-auto space-x-6">
          <div className="flex flex-col">
            <img src={caption5} />
            <p>Nairobi City Day Tour</p>
          </div>
          <div className="flex flex-col">
            <img src={caption6} />
            <p>Kibera Slums Tours</p>
          </div>
          <div className="flex flex-col">
            <img src={caption7} />

            <p>Hells Gate Naivasha</p>
          </div>
          <div className="flex flex-col">
            <img src={caption8} />
            <p>Mountain Climbing at M.t Longonot</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
