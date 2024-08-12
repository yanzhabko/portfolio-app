import { FC } from "react";
import Button from "../Button";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <section className="container flex flex-col gap-[25px] lg:flex-row items-center justify-around xl:justify-center xl:gap-[80px] mt-[60px]">
      <div className="bg-slate-500 rounded-full w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]">
        .
      </div>
      <div className="flex flex-col gap-[7px] items-center">
        <p className="text-gray-600 font-[600]">Hi, I'm</p>
        <h1 className="text-[24px] md:text-[32px] font-semibold">Yan Zhanko</h1>
        <p className="text-gray-600 md:text-[24px] font-[600]">
          Front-end Developer
        </p>
        <div className="flex justify-between gap-[20px] mt-[15px]">
          <Button
            title="Download CV"
            link=""
            className="border border-black text-black hover:bg-gray-900 hover:text-white hover:border-transparent"
          />
          <Button
            title="Contact Us"
            link=""
            className="bg-gray-700 text-white !px-[21px] hover:bg-gray-900"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
