import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import HeaderContentPage from "./HeaderContentPage";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const Data = {
  experience: [
    {
      title: "Independent Consultant",
      subTitle: "jomak enviromental services",
      description:
        "Involved in Environment impact assesement, Material testing, environmental consultancy, Crisis Management.",
      date: "2022 till date",
    },
    {
      title: "Vice princpal",
      subTitle: "Universal Comprehensive colledge",
      description:
        "Involved in Administrative Leadership, Curriculum Developnment, Staff Support, Students Engagement, Crisis Mangement and Data Analysis.",
      date: "2013-2022",
    },

    {
      title: "Sience Teacher",
      subTitle: "LandMark Colledge",
      description:
        "Lesson Planning, Instruction Delivery, Assessment, Student Support, Laboratory management, Fostering Interest, Proffessional Development",
      date: "2009-2012",
    },

    {
      title: "National Youth Serice Corps",
      subTitle: "LandMark Colledge",
      description:
        "Lesson Planning, Instruction Delivery, Assessment, Student Support, Laboratory management, Fostering Interest, Proffessional Development",
      date: "2008-2009",
    },

    {
      title: "Technologist (Industrial Attachment)",
      subTitle: "Global Trust Marine",
      description:
        "Servicing, Maintaining and Teasting Equipment to ensure they in good state.",
      date: "2004-2005",
    },
  ],
  education: [
    {
      title: "Secondary School",
      subTitle: "Secondary technical School, Aba, Abia State, Nigeria ",
      description: "Senior Secondary Certificate of Education",
      date: "1992-1998",
    },

    {
      title: "National Diploma",
      subTitle: " Federal University of Technology Owerri",
      description: "Science Laboratory Technology",
      date: "2003-2005",
    },

    {
      title: " Higher National Diploma",
      subTitle: " Imo State Polytechinc, Owerri",
      description: "Microbiology",
      date: "2005-2007",
    },

    {
      title: "Post Graduate Diploma",
      subTitle: " Lagos state University, Ojo.",
      description: "Industrial Biochemistry",
      date: "2015-2017",
    },

    {
      title: "Masters in Environmental Management",
      subTitle: " Lagos state University, Ojo.",
      description: "Environmental Management",
      date: "2019-2022",
    },

    {
      title: "Full stack Develoment Certificate",
      subTitle: "African Institute for Technology and Innovation.",
      description: "Full Stack Developer",
      date: "2023-2024",
    },
  ],
};

const Resume = () => {
  return (
    <section id="resume" className="h-[100%]">
      <HeaderContentPage
        headerText="My resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="lg:flex block w-[100%] ">
        <div className="w-[50%] flex flex-col gap-[2rem] flex-1 ">
          <h1 className="inline-block text-[#181818] text-[22px] font-bold leading-[1rem] tracking-[0.5px] p-[20px] self-center border-b border-solid border-yellow-500  relative uppercase ">
            Experience
          </h1>
          <VerticalTimeline layout={"1-column"} lineColor="#ffdd40">
            {Data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className=" flex  items-center flex-1"
                contentStyle={{
                  background: "none",
                  color: "#fffff",
                  border: "1.5px solid #fffff",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "yellow",
                }}
              >
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <h3>{item.subTitle}</h3>
                  <h4>{item.description}</h4>
                </div>
                <p className="text-[18px]">{item.date}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="w-[50%] flex flex-col gap-[2rem]">
          <h1 className="inline-block text-[#181818] text-[22px] font-bold leading-[1rem] tracking-[0.5px] p-[20px] self-center border-b border-solid border-yellow-500  relative uppercase ">
            Education
          </h1>
          <VerticalTimeline layout={"1-column"} lineColor="#ffdd40">
            {Data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="flex items-center last-child:pb-[0px] flex-1"
                contentStyle={{
                  background: "none",
                  color: "#fffff",
                  border: "1.5px solid #fffff",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "yellow",
                }}
              >
                <div className="text-[16px]">
                  <h2 className="font-bold ">{item.title}</h2>
                  <h3>{item.subTitle}</h3>
                  <h4>{item.description}</h4>
                </div>
                <p className="text-[18px]">{item.date}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
