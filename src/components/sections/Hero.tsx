import { FC } from "react";
import Title from "../Title";
import { socialLinks } from "../../utils/constants/constant";
import Icon from "../Icon";
import Image from "../Image";
import { Link } from "react-router-dom";
import hello from "../../images//hello.png";

const Hero: FC = () => {
  return (
    <section className="container flex flex-col-reverse gap-[25px] lg:flex-row items-center justify-around xl:justify-center xl:gap-[80px]">
      <div className="flex flex-col text-center lg:text-start gap-[7px] max-w-[450px]">
        <Title
          title="Front-End React Developer 👋"
          type="title"
          className="lg:!text-[50px]"
        />
        <Title
          title="Hi, I'm Yan Zhabko. A passionate Front-end React Developer based in Chernivtsi, Ukraine. 📍"
          type="subtitle"
        />
        <div className="flex justify-center lg:justify-start gap-[20px] mt-[15px]">
          {socialLinks.map((item, index) => (
            <Link
              target="_blank"
              to={item.link}
              key={index}
              className="*:hover:text-orange-300 *:!text-[30px]"
            >
              <Icon
                icon={item.icon}
                className="transition-all duration-200 text-black-100"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-full p-[10px] shadow-md">
        <Image
          src={hello}
          className="w-[270px] h-[250px] lg:w-[430px] lg:h-[400px]  filter drop-shadow-[0.5rem_0.5rem_0.5rem_rgba(0,0,0,0.5)]"
        />
      </div>
    </section>
  );
};

export default Hero;
