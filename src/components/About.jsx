import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import HeaderContentPage from "./HeaderContentPage";
import { TypeAnimation } from "react-type-animation";
import {DiApple, DiAndroid} from "react-icons/di"
import {FaDev, FaDatabase} from 'react-icons/fa'

const peronalDetails =[
  {
    label: " Name:", 
    value:  " Onyekwere Amaka C.",
  },

 

  {
    label: "Address:",
    value: " 66 Okeamu Avenue governor rd, Ikotun, Lagos",
  },

  {
    label: "Email :",
    value: " jomakwere@gmail.com",
  },

  {
    label: "Contact No:",
    value: " +234 8180825178",
  },
];

// const jobsummary =
// "As a dedicated and passionate Full stack developer, i an enthusastic in developing and deploying dynamic web applications from conception to completion. my expertise spans both front-end and back-endtechnologies, allowing me to build seamless user interfaces, proactive optimization, relentles debugging and rbust server-side logic. I thrive in fast-paced environment and excited about working n diverse projects that challenge my skills and contribute to innovative solution.";

const About = () => {
  return (
    <section id="about">
      <HeaderContentPage
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className=" mx-5  lg:w-[100%] 80%  space-x-[20px]">
        <div className="items-center justify-center ">
          <h1 className="font-bold text-4xl text-black mb-10">
            Full Stack developer
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold mb-4 ">
            As a dedicated and passionate Full stack developer,{" "}
            <span className="text-red-500">
              <TypeAnimation
                sequence={[
                  "i am enthusastic in developing and deploying dynamic web applications from conception to completion. my expertise spans both front-end and back-end technologies, allowing me to build seamless user interfaces, proactive optimization, relentles debugging and rbust server-side logic.",
                  1000,
                  "My expertise spans both front-end and back-end  technologies, allowing me to build seamless user interfaces, proactive optimization, relentles debugging and robust server-side logic.",
                  1000,
                  "I thrive in fast-paced environment and excited about working in diverse projects that challenge my skills and contribute to innovative solution",
                  1000,
                  " a professional Environmentalist",
                  100,
                ]}
                speed={50}
                style={{ fontsize: "1rem" }}
                repeat={Infinity}
              />
            </span>
          </p>

          <h3 className="font-bold text-2xl text-black mb-1.5">Personal Information</h3>
          <ul>
            {peronalDetails.map((item, i) => (
              <li className="leading-[1rem] mb-[15px]" key={i}>
                <span className="text-xl font-bold ">{item.label}</span>
                <span className="text-xl tracking-[0.5px] pb-[5px] text-amber-500">{item.value}</span>
              </li>
            ))}
          </ul> 
        </div>
        {/* <div className="w-[50%]  flex items-center ">
          <div className="  w-[] h-[]">
          <div><FaDev/></div>
          <div><DiAndroid/></div>
          <div><FaDatabase/></div>
          <div><DiApple/></div> */}

          {/* </div> */}
          
      
          
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;
