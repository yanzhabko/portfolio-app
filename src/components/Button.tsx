import { FC } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  title: string;
  link: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ title, link, className }) => {
  return (
    <Link to={link} className={`${className} px-[10px] py-[7px] rounded-lg`}>
      {title}
    </Link>
  );
};

export default Button;
