import { FC, ComponentType } from "react";
import Title from "./Title";
import Icon from "./Icon";

interface AboutCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  subTitle: string;
}

const AboutCard: FC<AboutCardProps> = ({ icon, title, subTitle }) => {
  return (
    <div className="flex-1 border w-full text-center border-gray-700 p-[1.5rem] flex gap-[5px] flex-col items-center rounded-lg">
      <Icon icon={icon} />
      <Title type="title" title={title} className="!text-[18px]" />
      {subTitle.split("/").map((item, index) => (
        <Title key={index} title={item} type="subtitle" />
      ))}
    </div>
  );
};

export default AboutCard;
