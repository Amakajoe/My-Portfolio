import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import HeaderContentPage from "./HeaderContentPage";
import SocialIcons from "./SocialIcons";
import { Animate } from "react-simple-animate";

const Contact = () => {
  return (
    <section id="contact" className="p-[20px]">
      <HeaderContentPage
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="text-[#000] inline-block mb-[5px] font-bold text-[22px] leading-[1rem] tracking-[0.5px] relative uppercase p-[15px] border-b border-solid border-yellow-500  ">
            Let's Talk
          </h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="mt-[30px]">
            <div className="lg:grid lg:grid-cols-2  grid-cols-1 gap=-[50px] lg:gap-[40px] lg:mb-[30px]">
              <div className="relative ">
                <input
                  required
                  name="name"
                  type="text"
                  className="w-[100%] border-2 border-solid border-yellow-500 p-[16px,12px] transition duration-500 ease-in-out bg-transparent relative"
                />
                <label
                  htmlFor="name"
                  className="font-medium absolute top-[7px] left-[12px] transition duration-200 ease-in-out text-black text-[16px]"
                >
                  Name
                </label>
              </div>

              <div>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-[100%] border-2 border-solid border-yellow-500 p-[16px,12px] transition duration-500 ease-in-out bg-transparent relative"
                />
                <label
                  htmlFor="email"
                  className="font-medium absolute lg:right-120 top-8 lg:top-1.5 transition duration-200 ease-in-out text-black text-[16px]"
                >
                  Email
                </label>
              </div>

              <div>
                <textarea
                  required
                  name="description"
                  type="text"
                  rows="5"
                  className="w-[100%] border-2 border-solid border-yellow-500 p-[16px,12px] transition duration-500 ease-in-out bg-transparent relative"
                />
                <label
                  htmlFor="description"
                  className="font-medium absolute top-42 left-[12px] transition duration-200 ease-in-out text-black text-[16px]"
                >
                  Description
                </label>
              </div>
            </div>
            <button className="cursor-pointer p-[10px,70px] text-3xl bg-transparent text-[#000] border border-solid border-yellow-500 rounded-sm hover:bg-[#000] hover:text-red-500 hover:p-[30px,80px]">
              Submit
            </button>
          </div>
        </Animate>
      </div>

      <div>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateY(-200px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
        >
          <SocialIcons />
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
