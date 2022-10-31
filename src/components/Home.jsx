import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Typed from 'react-typed';
import { Link } from "react-scroll";
import "./responsive.css";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pb-16"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center border-blue-700 h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-2/3">
          <h5 id={'h5'} className="text-4xl sm:text-7xl font-bold text-white">
            <Typed strings={["I am a full stack Dev"]} typeSpeed={120} backSpeed={120} loop/>
          
          </h5>
          <p className="text-gray-400 py-4 max-w-md">
            I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
