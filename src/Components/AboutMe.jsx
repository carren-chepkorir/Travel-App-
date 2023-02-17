import React from "react";
import kip from "../assets/kip.jpeg";
import Slider2 from "./Slider2";
const AboutMe = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex ">
        <div className=" ml-10 flex flex-1 text-white flex-col md:bg-[url(https://images.unsplash.com/photo-1483470873734-93599652a354?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]">
          <h1 className="font-bold text-4xl leading-loose">About Me</h1>
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
    </div>
  );
};

export default AboutMe;
