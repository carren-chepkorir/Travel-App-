import React from "react";
import { FiChevronRight } from "react-icons/fi";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service7 from "../assets/service7.jpeg";
import service10 from "../assets/service10.jpeg";

import { Link } from "react-router-dom";

const MyServices = () => {
  return (
    <div className="h-[100vh]">
      <div className="h-[20vh] md:bg-cover md:bg-[url('assets/safaris30.jpg')] grid place-content-center ">
        <div className=" flex flex-row">
          <Link to="/">
            <h2 className="text-2xl">Home</h2>
          </Link>
          <FiChevronRight size={40} />
          <p className="font-bold text-4xl text-orange-600 animate-pulse">
            OUR SERVICES
          </p>
        </div>
      </div>
      <div className="flex container m-auto flex-row">
        <div className="flex-1 flex-col">
          <div className="flex flex-row mt-10">
            <img className="max-h-[25vh]" src={service1} />
            <div className="flex-col flex">
              <h1 className="ml-10 font-bold text-2xl">SIGHT-SEEING TOURS</h1>
              <p className="ml-10">
                Sight-Seeing Tours From wildlife safaris and dining in Bush with
                the lions in Masai Mara, golfing in the Aberdares, Cultural
                adventure in maasai Land Loita Hills, white water rafting in
                Tana River to scuba diving and sunbathing in the coast, Kenya &
                Tanzania have them all.We also have Girrafe center at Nairobi.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <img className="max-h-[25vh]" src={service10} />
            <div>
              <h1 className="ml-10 font-bold text-2xl ">BIRD WATCHING</h1>

              <p className="ml-10">
                East Africa is one of the top birding destinations in the world.
                Its rich incredible variety is the dream of every birding
                enthusiast. Kenya has over 1000 recorded species of birds and it
                is not uncommon to tick off over 300 species within a single
                location. Our birding trips vary from a full day at Nairobi
                National Park to several weeks in famous birding sites such as
                Lake Naivasha, Lake Baringo, Kakamega Forest, Lake Victoria,
                Mount Kenya and Lake Nakuru National park- home of the
                world-famous flamingo.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <img className="max-h-[25vh]" src={service2} />
            <div>
              <h1 className="ml-10 font-bold text-2xl ">BEACH HOLIDAYS</h1>
              <p className="ml-10">
                Beach Holidays at Diani Beach & Zanzibar Island are major beach
                resorts on the Indian Ocean coast of East Africa. They harbour
                world class hotels, lain along their white sandy beaches. They
                are the best retreats to head out to after a long safari on the
                main lands.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <img className="max-h-[25vh]" src={service3} />
            <div>
              <h1 className="ml-10 font-bold text-2xl ">MOUNTAIN CLIMBING</h1>
              <p className="ml-10">
                Mountain Climbing East Africa mountain climbing adventures is
                among the many things we can arrange for you.We have Mount
                Kenya, We are brave and accomplished in mountain climbing
                specialty and related walking, hiking, trekking safaris.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-col">
          <div className="flex flex-row mt-10">
            <img className="max-h-[25vh]" src={service4} />
            <div>
              <h1 className="ml-10 font-bold text-2xl ">HOTEL BOOKING</h1>
              <p className="ml-10">
                Wilderness lodges, Business hotels – you name it, we’ll get you
                the best bargain.I’ve mastered the fine art of finding the
                perfect hotel. So if you need a little expert help finding a
                place that ticks all the boxes, am here to assist.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <img className="max-h-[25vh]" src={service1} />
            <div>
              {" "}
              <h1 className="ml-10 font-bold text-2xl ">FAMILY SAFARIS</h1>
              <p className="ml-10">
                Our family safaris are tailored to provide a safe and wholesome
                fun for the whole family. In addition children get an
                opportunity to learn about other cultures, and nature and give
                the parents time to relax. The Nairobi Safari Walk a mere 7km
                from the city centre is conservation recreation facility where
                visitors get to learn about wildlife. It has variety of animals
                such as rare bongo, white rhino, antelopes and primates, and
                provides a sampling of what to expect in Kenyan parks.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <img className="max-h-[25vh]" src={service5} />
            <div>
              <h1 className="ml-10 font-bold text-2xl "> AIRPORT TRANSFERS</h1>
              <p className="ml-10">
                I do transportation to and from Airport. Nail down your flights,
                book the perfect place to stay and craft an itinerary of
                dreams.Don’t wait until you stagger off the plane to wonder,
                ‘how am I getting to my final destination?’ Talk to us to beat
                the crowds and breeze to your destination stress-free.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <img className="max-h-[25vh]" src={service7} />
            <div className="flex flex-col">
              <h1 className="ml-10 font-bold text-2xl ">
                HOT AIR BALLOON SAFARIS
              </h1>
              <p className="ml-10">
                A panoramic view of the scenic Mara teeming with wildlife far
                into the crimson horizon is truly inspiring. As the balloon
                gently soars above the tree tops you will have a chance to
                capture the dramatic struggle for survival between prey and
                predator continually played on the savannah grasslands below.
                There is a serene silence around you apart from the purring of
                burners while the balloon is airborne. The balloon flight lasts
                about an hour, led in the direction of the morning breeze.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1d3c58] h-[20vh] text-white flex ">
        <div className="flex flex-col flex-1 ">
          <h1 className=" hover:text-orange-500">CONTACT ME</h1>
          <p className=" hover:text-orange-500">+254 722177102</p>
          <p className=" hover:text-orange-500">nicholaskipngetich@gmail.com</p>
        </div>
        <div className="flex flex-col flex-1 ">
          <h1 className=" hover:text-orange-500">SUPPORT</h1>
          <p className=" hover:text-orange-500">Get 24hr Support </p>
          <a
            href="https://www.facebook.com/Kipshariff/photos"
            className=" hover:text-orange-500"
          >
            <p className=" hover:text-orange-500">Gallery</p>
          </a>
        </div>
        <div className="flex flex-col flex-1 ">
          <Link to="/About">
            <h1 className=" hover:text-orange-500">ABOUT US</h1>
          </Link>
          <p className=" hover:text-orange-500">
            Discovery offers adventure safaris <br />
            and travel consultancy services about
            <br /> the magnificent East Africa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
