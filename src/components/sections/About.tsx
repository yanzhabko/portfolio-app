import { FC } from "react";
import AboutCard from "../AboutCard";
import { about } from "../../utils/constants/constant";
import Title from "../Title";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <section
      id="about"
      className="container flex flex-col items-center gap-[5px]"
    >
      <Title title="Get To Know More" type="subtitle" />
      <Title title="About Me" type="title" />
      <div className="flex w-full flex-col items-center lg:flex-row gap-[50px] mt-[20px]">
        <div className="w-[320px] h-[350px] bg-gray-700 rounded-2xl"></div>
        <div className="flex-1 flex flex-col gap-[40px]">
          <div className="flex flex-col sm:flex-row flex-wrap gap-[40px] w-auto">
            {about.map((item, index) => (
              <AboutCard
                key={index}
                icon={item.icon}
                title={item.title}
                subTitle={item.subTitle}
              />
            ))}
          </div>
          <Title
            title="My name's Yan and I motivated and result-driven front-end dev.
            Nowadays I'm actively focusing on developing projects which use
            modern technologies such as React, TypeScript, Axios, NextJS and
            more. I have experience and skills to creating applications from
            scratch and supporting projects in the future."
            type="text"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
