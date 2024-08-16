import { FC } from "react";
import Title from "../Title";
import Image from "../Image";
import { techStack } from "../../utils/constants/constant";
import Skills from "../Skills";
import love from "../../images/love.png";

const About: FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container flex w-full flex-col items-center lg:flex-row gap-[50px]">
        <Image
          src={love}
          className="w-[300px] h-[250px] sm:w-[330px] lg:w-[480px] lg:h-[400px] rounded-2xl filter drop-shadow-[0.5rem_0.5rem_0.5rem_rgba(0,0,0,0.5)]"
        />
        <div className="flex-1 items-center text-center lg:text-start lg:items-start flex flex-col gap-[20px]">
          <Title
            title="About Me 🧔🏻‍♂️"
            type="title"
            className="text-orange-300 !font-[500] uppercase"
          />
          <Title
            title="My name's Yan and I motivated and result-driven front-end dev.
            I have experience and skills to creating applications from
            scratch and supporting projects in the future."
            type="text"
          />
          <Title
            title="My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript."
            type="text"
          />
          <div className="flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[15px]">
            <Title
              title="Tech Stack"
              type="subtitle"
              className="!text-black-100"
            />
            <Skills techStack={techStack} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
