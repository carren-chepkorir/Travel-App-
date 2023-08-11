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
import caption9 from "../assets/Kongoni.jpg";
import caption10 from "../assets/mount-kenya.jpg";
import caption11 from "../assets/lentile.jpg";
import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
    <div className="h-[100vh]">
      <div className=" md:flex-wrap md:h-[40vh] p-5 flex text-white flex-col bg-[url(https://images.unsplash.com/photo-1483470873734-93599652a354?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]">
        <div className=" flex justify-center">
          <h1 className="flex flex-wrap font-bold md:text-4xl leading-loose ">
            About Creatify Safaris
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center mt:3">
          <p className="md:leading-loose">
            Here at Creatify,we offer Safaris in Kenya, for private and group
            joining safaris for single individuals, couples, families, friends,
            or groups of people from all over the world are able to book
            holidays directly in Kenya, Hotel Bookings, Sunny Beach & Hotel
            Holidays, safari in Kenya and Adventure Safari Tours.We take pride
            in putting you in the right place at the right time to maximise your
            wildlife encounters. This is at the heart of everything we do, at
            all levels of the business. Our team have lived, worked and
            travelled across the globe, and together we have the requisite
            knowledge and experience to plan the perfect safari for you.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center ">
        <div className="md:flex flex-wrap ">
          <h2 className="md:text-2xl font-bold mt-5 ">WHY BOOK WITH US</h2>
        </div>
        <div className="md:flex flex-wrap flex-row space-x-3 md:mt-5 p-5">
          <div className="flex-1 flex-col md:p-5 ">
            <h2 className="text-2xl font-bold">
              We are destination specialists
            </h2>
            <p>
              Our team of specialists have extensive on-the-ground knowledge and
              have all lived, guided or explored in great detail the
              destinations that they sell.
            </p>
          </div>
          <div className="flex-1 flex-col ">
            <h2 className="text-2xl font-bold">
              We really care about our destinations
            </h2>
            <p>
              We frequently monitor the social, economic and environmental
              impact of our travel operations to ensure our trips are
              sustainable and ethical.
            </p>
          </div>
          <div className="flex-1 flex-col ">
            <h2 className="text-2xl font-bold">We are wildlife specialists</h2>
            <p>
              As a leading specialist operator we have excellent partnerships
              with naturalists and conservationists. We know our wildlife and do
              what we can to preserve its natural habitat.
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex flex-wrap ">
        <div className="md:flex flex-1 flex-col justify-center p-5">
          <Link to="/Services">
            <h1 className="md:font-bold m-5 text-2xl">OUR SERVICES</h1>
          </Link>
          <p className="md:leading-loose">
            Our clients enjoy services of our dependable connections throughout
            Kenya.We offer proffesional advice and guidance on each particular
            inquiry.We will take care of your Holiday planning and ground
            handling logistics from meet and greet formalities,assistance on
            arrival at the Airport,transfers to the respective hotels,bookings
            and accomodation arrangements
          </p>
          <h1 className="md:font-bold m-5 text-2xl">OUR CUSTOMERS</h1>
          <p className="md:leading-loose">
            Our culture of putting customers first and on time service delivery
            has played an important role on our success.We evaluate our clients
            needs and provide a tailor-made solutionswhilst allowing room for
            future growth and expansion.
          </p>
          <h1 className="md:font-bold m-5 text-2xl">OUR EXPERIRNCE</h1>
          <p className="md:leading-loose">
            We have a long term experience in working with a wide vrange of
            clients.This has given us a unique balance of skills in knowing
            between what is out there in terms of our clients needs and
            understanding our market to make sure our products are
            plausible,possible and affordable
          </p>
        </div>
        <div className=" md:flex flex-1 ">
          <img src={caption11} className="rounded-lg" />
        </div>
      </div>

      <div className="md:p-10">
        <h2 className=" md:font-bold text-2xl  text-orange-600 ">
          Have you been here?
        </h2>
        <h2 className="md:font-bold text-2xl">This is where to go right now</h2>
        <p>
          Don’t miss the list of Epic Adventure that spark your
          Wanderlust!explore the most travelled places in Kenya
        </p>
      </div>

      <div className="  ml-10 md:mt-5 flex flex-col justify-center items-center">
        <div className="flex flex-wrap flex-row container m-auto space-x-2">
          <div className="flex flex-col">
            <img src={caption1} className="rounded-lg" />
            <p>Girrafe Center Nairobi</p>
          </div>
          <div className="flex flex-col">
            <img src={caption2} className="rounded-lg" />
            <p>Maasai Village Day Tour</p>
          </div>
          <div className="flex flex-col">
            <img src={caption3} className="rounded-lg" />

            <p>Nairobi Story Telling Tour</p>
          </div>
          <div className="flex flex-col">
            <img className="md:h-[290px] w-[300px] rounded-lg" src={caption4} />
            <p>Elephant Trust Center</p>
          </div>
          <div className="flex flex-col">
            <img className="md:h-[290px] w-[300px] rounded-lg" src={caption9} />
            <p>Nanyuki</p>
          </div>
        </div>

        <div className="md:flex flex-wrap flex-row container m-auto space-x-2">
          <div className="flex flex-col">
            <img className="md:h-[290px] w-[300px] rounded-lg" src={caption5} />
            <p>Nairobi City Day Tour</p>
          </div>
          <div className="flex flex-col">
            <img className="md:h-[290px] w-[300px] rounded-lg" src={caption6} />
            <p>Kibera Slums Tours</p>
          </div>
          <div className="flex flex-col">
            <img className="md:h-[290px] w-[300px] rounded-lg" src={caption7} />

            <p>Hells Gate Naivasha</p>
          </div>
          <div className="flex flex-col">
            <img className="md:h-[290px] w-[300px] rounded-lg" src={caption8} />
            <p>Mountain Climbing at M.t Longonot</p>
          </div>
          <div className="flex flex-col">
            <img
              className="md:h-[290px] w-[300px] rounded-lg"
              src={caption10}
            />
            <p>Mountain Climbing at M.t Kenya</p>
          </div>
        </div>
      </div>
      <div className="flex-wrap bg-[#145365] mb-0 flex  text-white">
        <div className="md:flex-1 flex-wrap flex-col leading-loose md:p-10">
          <p className="md:text-2px font-bold">CONTACT US</p>
          <p> Tel:+254 742295861</p>

          <p>Email: chepkorircarren9@gmail.com</p>

          <p>Location:Nairobi,Kenya</p>
          <p>Working Hours-24hr Support</p>
          <p> Hotel Bookings</p>
        </div>
        <div className="md:flex-1 flex-wrap  flex-col flex leading-loose md:p-10">
          <h2>Safari Tours</h2>
          <p>Family safaris</p>
          <p>Honeymoon safaris</p>
          <p>Safari and Beach Holidays</p>
          <p>Nairobi safaris</p>
          <p>Short safaris</p>
        </div>
        <div className="md:flex-1 flex-wrap flex flex-col leading-loose p-10 ">
          <p>Our Services</p>
          <a
            href="https://www.facebook.com/Kipshariff/photos"
            className=" hover:text-orange-500"
          >
            <p className=" hover:text-orange-500">Gallery</p>
          </a>
          <p className="">Home</p>
          <Link to="/About">
            <p>About Creatify</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
