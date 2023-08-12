import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import safaris20 from "../assets/Contact-Us.png";
const ContactMe = () => {
  const form = useRef();
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [user_phone, set_user_phone] = useState("");
  const [user_mail, set_user_mail] = useState("");
  const [subject, set_subject] = useState("");
  const [message, set_message] = useState("");
  const handleFirstName = (e) => {
    set_first_name(e.target.value);
  };
  const handleLastName = (e) => {
    set_last_name(e.target.value);
  };
  const handleEmail = (e) => {
    set_user_mail(e.target.value);
  };
  const handlePhone = (e) => {
    set_user_phone(e.target.value);
  };
  const handleSubject = (e) => {
    set_subject(e.target.value);
  };
  const handleMessage = (e) => {
    set_message(e.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs
      .sendForm(
        "service_76q7isl",
        "template_fo9s71s",
        form.current,
        "y3DC1OZ_4ArqbFFPC"
      )
      .then(
        (response) => {
          console.log(
            "Message sent successfully",
            response.status,
            response.text
          );
        },
        (error) => {
          console.log("Failed", error);
        }
      );
    set_first_name("");
    set_last_name("");
    set_user_phone("");
    set_subject("");
    set_user_mail("");
    set_message("");
  };
  return (
    <div>
      <div className="flex">
        <p className="md:font-bold text-2xl ml-20 sd:text-xl">
          GET IN TOUCH WITH US
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className=" flex flex-wrap md: h-[70vh] flex-1 md:ml-20">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-wrap flex-row">
              <div className=" flex  flex-col ">
                <label className="">First Name</label>
                <input
                  className="border h-[50px] w-[300px] mt-4 rounded-lg py-2 px-3"
                  type="text"
                  name="first_name"
                  value={first_name}
                  onChange={handleFirstName}
                />
              </div>
              <div className="flex flex-col md:ml-10 ">
                <label>Last Name</label>
                <input
                  className="border h-[50px] w-[300px] py-2 px-3 text-grey-darkest mt-4 rounded-lg "
                  type="text"
                  name="Last_name"
                  value={last_name}
                  onChange={handleLastName}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="border py-2 px-3 text-grey-darkest mt-4 rounded-lg md:h-[50px] w-[380px]"
                type="text"
                name="user_mail"
                value={user_mail}
                onChange={handleEmail}
              />
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input
                className="border  py-2 px-3 text-grey-darkest mt-4 rounded-lg md:h-[50px] w-[380px]"
                type="tel"
                name="user_phone"
                value={user_phone}
                onChange={handlePhone}
              />
            </div>
            <div className="flex flex-col">
              <label>Subject</label>
              <input
                className="border  py-2 px-3 text-grey-darkest mt-4 rounded-lg md:h-[50px] w-[380px]"
                type="text"
                name="subject"
                value={subject}
                onChange={handleSubject}
              />
            </div>
            <div className="flex flex-col">
              <label>Message</label>
              <textarea
                className="border  py-2 px-3 text-grey-darkest mt-4 rounded-lg md:h-[150px] w-[380px]"
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={handleMessage}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#145365] rounded-lg py-2 px-8  mt-2"
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" md:text-2xl flex flex-1 flex-wrap flex-col">
          <p>Are you interested traveling with us? We are here for you</p>
          <p className="md:text-3xl animate-pulse font-bold">Let's Talk</p>
          <p className="font-bold">Call or WhattsApp +254 722177102</p>
          <img src={safaris20} />
        </div>
      </div>
      <div className="bg-[#145365] mb-0 flex h-[40vh] text-white">
        <div className="flex-1 flex-wrap flex-col leading-loose md:ml-20">
          <p className="text-2px font-bold">CONTACT US</p>
          <p> Tel:+254 742295861</p>

          <p>Email: chepkorircarren9@gmail.com</p>

          <p>Location:Nairobi,Kenya</p>
          <p>Working Hours-24hr Support</p>
          <p> Hotel Bookings</p>
        </div>
        <div className="md:flex-1 flex-wrap  flex-col flex leading-loose">
          <h2>Safari Tours</h2>
          <p>Family safaris</p>
          <p>Honeymoon safaris</p>
          <p>Safari and Beach Holidays</p>
          <p>Nairobi safaris</p>
          <p>Short safaris</p>
        </div>
        <div className="md:flex-1 flex-wrap flex flex-col leading-loose lg:ml-10 ">
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

export default ContactMe;
