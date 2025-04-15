import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import HeaderContentPage from "./HeaderContentPage";
import SocialIcons from "./SocialIcons";
import { Animate } from "react-simple-animate";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="p-[20px]">
      <HeaderContentPage
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
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
            <h2 className="text-2xl font-bold text-amber-500 text-center mb-4">
              Contact Me
            </h2>
          </Animate>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div>
                <label className="block text-black font-medium mb-[10px]">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-black font-medium m-[10px]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-black font-medium m-[10px]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Type your message..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-red-500 transition-all ease-in-out duration-300 "
              >
                Send Message
              </button>
            </Animate>
          </form>

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
        </div>
      </div>
    </section>
  );
};

export default Contact;
