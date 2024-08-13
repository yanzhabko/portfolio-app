import { FC } from "react";

interface TitleProps {
  title: string;
  className?: string;
  type: "title" | "subtitle" | "text";
}

const Title: FC<TitleProps> = ({ title, className, type }) => {
  const Tag = type === "title" ? "h1" : "p";
  const titleContent = () => {
    if (type === "title") {
      return (
        <Tag className={`${className} text-[24px] md:text-[32px] font-[600]`}>
          {title}
        </Tag>
      );
    } else if (type === "subtitle") {
      return (
        <Tag className={`${className} text-[15px] text-gray-600 font-[500]`}>
          {title}
        </Tag>
      );
    } else if (type === "text") {
      return (
        <Tag className={`${className} text-[14px] text-gray-500`}>{title}</Tag>
      );
    } else {
      return null;
    }
  };
  return <>{titleContent()}</>;
};

export default Title;
