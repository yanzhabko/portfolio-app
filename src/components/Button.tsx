import { FC } from "react";

interface ButtonProps {
  title: string;
  className?: string;
  type: "dark" | "white";
  tag?: "button" | "a";
}

const Button: FC<ButtonProps> = ({
  title,
  className,
  tag = "button",
  type,
}) => {
  const Tag = tag;
  const ButtonContext = () => {
    if (type === "dark") {
      return (
        <Tag
          className={`${className} bg-gray-700 text-white !px-[21px] hover:bg-gray-900  py-[7px] rounded-lg`}
        >
          {title}
        </Tag>
      );
    } else if (type === "white") {
      return (
        <Tag
          className={`${className} border border-black text-black hover:bg-gray-900 hover:text-white hover:border-transparent px-[10px] py-[7px] rounded-lg`}
        >
          {title}
        </Tag>
      );
    } else {
      return null;
    }
  };
  return <>{ButtonContext()}</>;
};

export default Button;
