import { FC } from "react";

interface NavLinkProps {
  title: string;
  link: string;
  className?: string;
  onClick?: () => void;
  type?: "logo" | "nav";
}

const NavLink: FC<NavLinkProps> = ({
  title,
  link,
  className,
  onClick,
  type = "nav",
}) => {
  const Tag = "a";
  const NavLinkContext = () => {
    if (type === "nav") {
      return (
        <Tag
          href={link}
          onClick={onClick}
          className={`${className} text-black-100 relative transition-all duration-200 hover:text-orange-300 hover:before:absolute hover:before:opacity-100 hover:before:animate-line-slide-up hover:before:w-full hover:before:h-[2px] hover:before:bottom-[-3px] hover:before:bg-orange-300`}
        >
          {title}
        </Tag>
      );
    } else if (type === "logo") {
      return (
        <Tag
          href={link}
          onClick={onClick}
          className={`${className} text-black-100 font-[600] text-[22px] md:text-[24px]`}
        >
          {title}
        </Tag>
      );
    } else {
      null;
    }
  };
  return <>{NavLinkContext()}</>;
};

export default NavLink;
