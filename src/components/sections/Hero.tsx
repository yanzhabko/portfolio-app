import { FC } from "react";
import Button from "../Button";
import Title from "../Title";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <section className="container flex flex-col gap-[25px] lg:flex-row items-center justify-around xl:justify-center xl:gap-[80px] mt-[60px]">
      <div className="bg-slate-500 rounded-full w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]">
        .
      </div>
      <div className="flex flex-col gap-[7px] items-center">
        <Title title="Hi, I'm" type="subtitle" />
        <Title title="Yan Zhabko" type="title" />
        <p className="text-gray-600 md:text-[24px] font-[600]">
          Front-End Developer
        </p>
        <div className="flex justify-between gap-[20px] mt-[15px]">
          <Button type="white" title="Download CV" />
          <Button type="dark" tag="a" title="Contact Us" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
