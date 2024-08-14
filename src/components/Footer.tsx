import { FC } from "react";
import Title from "./Title";
import Icon from "./Icon";
import { socialLinks } from "../utils/constants/constant";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="py-[60px] bg-black-100">
      <div className="container flex flex-col gap-[20px] justify-center items-center text-center lg:flex-row  lg:justify-between">
        <Title
          title="Copyright © 2024. All rights are reserved"
          type="title"
          className="text-white !text-[18px] !font-[600]"
        />
        <div className="flex gap-[20px] justify-center items-center">
          {socialLinks.map((item, index) => (
            <Link target="_blank" to={item.link} key={index}>
              <Icon
                icon={item.icon}
                className="transition-all !text-[28px] text-white duration-200 active:scale-130 hover:scale-130"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
