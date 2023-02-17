import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import safaris20 from "../assets/Contact-Us.png";
const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_76q7isl",
        "template_62atsf7",
        form.current,
        "y3DC1OZ_4ArqbFFPC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="flex">
        <p className="font-bold text-2xl ml-20">GET IN TOUCH WITH ME</p>
      </div>
      <div className="flex">
        <div className="h-[70vh] ml-20 flex-1">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-row">
              <div className=" flex flex-col ">
                <label className="">First Name</label>
                <input
                  className="border h-[50px] w-[300px] py-2 px-3 text-grey-darkest mt-4 rounded-lg"
                  type="text"
                  name="first_name"
                />
              </div>
              <div className="ml-10 flex flex-col ">
                <label>Last Name</label>
                <input
                  className="border h-[50px] w-[300px] py-2 px-3 text-grey-darkest mt-4 rounded-lg"
                  type="text"
                  name="Last_name"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="border h-[50px] w-[500px] py-2 px-3 text-grey-darkest mt-4 rounded-lg "
                type="text"
                name="user_mail"
              />
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input
                className="border h-[50px] w-[500px] py-2 px-3 text-grey-darkest mt-4 rounded-lg"
                type="tel"
                name="user_phone"
              />
            </div>
            <div className="flex flex-col">
              <label>Subject</label>
              <input
                className="border h-[50px] w-[500px] py-2 px-3 text-grey-darkest mt-4 rounded-lg"
                type="text"
                name="subject"
              />
            </div>
            <div className="flex flex-col">
              <label>Message</label>
              <textarea
                className="border h-[150px] w-[500px] py-2 px-3 text-grey-darkest mt-4 rounded-lg"
                type="text"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button className="bg-[#145365] rounded-lg py-2 px-8  mt-2">
              Submit
            </button>
          </form>
        </div>
        <div className=" md:text-2xl flex flex-1 flex-col">
          <p>Are you interested traveling with me? Am here for you</p>
          <p className="text-3xl animate-pulse font-bold">Let's Talk</p>
          <img src={safaris20} />
        </div>
      </div>
      <div className="bg-[#145365] mb-0 flex h-[30vh] text-white">
        <div className="flex-1 flex-col leadin-loose ml-20">
          <p className="text-2px font-bold">CONTACT ME</p>
          <p> Tel:+254 742295861</p>
          <p>Email: chepkorircarren9@gmail.com</p>
          <p>Location:Nairobi,Kenya</p>
        </div>
        <div className="flex-1 flex flex-col leading-loose ">
          <p>Working Hours-24hr Support</p>
          <p> Hotel Bookings</p>
          <Link to="/About">
            <p>About Creatify</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
