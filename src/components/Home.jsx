import React from "react";
import pix from "../assets/Mypix.jpg";
import { TypeAnimation } from "react-type-animation";
import Button from './Button';

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={pix}
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg-w-[350px] xl-[400px shadow-lg hover:scale-110 transition duration-300]"
          alt="My picture"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-4xl sm:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-red-500">Amaka</span>
        </h1>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 ">
          I am a{" "}
          <span className="text-red-500">
            <TypeAnimation
              sequence={[
                "software Engineer",
                1000,
                "Microbiologist",
                1000,
                "Biochemist",
                1000,
                " a professional Environmentalist",
                100,
              ]}
              speed={50}
              style={{ fontsize: "1rem" }}
              repeat={Infinity}
            />
          </span>
        </h3>
        <p className="text-sm sm:text-lg ">
          Amaka is a passionate educator, a technologist, a microbiologist, a
          biochemist also an environmentalist.
        </p>

        <div>
          <Button/>
        </div>
      </div>
    </section>
  );
};

export default Home;
