import { FC } from "react";
import Image from "./Image";

interface SkillsProps {
  techStack: string[];
}

const Skills: FC<SkillsProps> = ({ techStack }) => {
  return (
    <>
      <div className="hidden lg:block w-[1.5px] h-[30px] bg-black-100"></div>
      <div className="flex gap-[20px] lg:gap-[15px] items-center flex-wrap justify-center">
        {techStack.map((item, index) => (
          <Image
            className="w-[107px] h-[50px] lg:w-[70px] xl:w-[90px] active:translate-y-[-10px] hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            src={item}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
