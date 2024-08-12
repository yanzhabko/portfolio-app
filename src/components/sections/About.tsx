import { FC } from "react";
import AboutCard from "../AboutCard";
import { about } from "../../utils/constants/constant";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  console.log(about);
  return (
    <section className="container flex flex-col items-center gap-[5px]">
      <p>Get To Know More</p>
      <h1 className="text-[24px] md:text-[32px] font-[600]">About Me</h1>
      <div className="flex w-full flex-col items-center lg:flex-row gap-[50px] mt-[20px]">
        <div className="w-[320px] h-[350px] bg-gray-700 rounded-lg"></div>
        <div className="flex-1 flex flex-col gap-[40px]">
          <div className="flex flex-col sm:flex-row flex-wrap gap-[40px] w-auto">
            {about.map((item, index) => (
              <AboutCard
                key={index}
                component={item.icon}
                title={item.title}
                subTitle={item.subTitle}
              />
            ))}
          </div>
          <p className="text-gray-600 text-wrap">
            My name's Yan and I motivated and result-driven front-end dev.
            Nowadays I'm actively focusing on developing projects which use
            modern technologies such as React, TypeScript, Axios, NextJS and
            more. I have experience and skills to creating applications from
            scratch and supporting projects in the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
