import { FC } from "react";

interface NavLinkProps {
  title: string;
  link: string;
  className?: string;
  onClick?: () => void;
}

const NavLink: FC<NavLinkProps> = ({ title, link, className, onClick }) => {
  const Tag = "a";
  return (
    <Tag
      href={link}
      onClick={onClick}
      className={`${className} relative hover:text-gray-500 hover:before:absolute hover:before:opacity-100 hover:before:animate-line-slide-up hover:before:w-full hover:before:h-[2px] hover:before:bottom-[-3px] hover:before:bg-gray-500`}
    >
      {title}
    </Tag>
  );
};

export default NavLink;
