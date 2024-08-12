import { FC, ComponentType } from "react";

interface AboutCardProps {
  component: ComponentType<{ className?: string }>;
  title: string;
  subTitle: string;
}

const AboutCard: FC<AboutCardProps> = ({
  component: Component,
  title,
  subTitle,
}) => {
  return (
    <div className="flex-1 border w-full text-center border-gray-700 p-[1.5rem] flex gap-[5px] flex-col items-center rounded-lg">
      <Component className="text-[26px]" />
      <p className="text-[18px] font-[600]">{title}</p>
      {subTitle.split("/").map((item, index) => (
        <p className="text-gray-600 text-[16px] font-[500]" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default AboutCard;
