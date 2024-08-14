import junior from "../../images/4.svg";
import juniorMiddle from "../../images/3.svg";
import middle from "../../images/2.svg";
import senior from "../../images/1.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

export const navLinks = [
  { title: "Home", link: "#" },
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
];

export const socialLinks = [
  { icon: FaGithub, link: "https://github.com/yanzhabko" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/yan-zhabko/" },
];

export const techStack = [junior, juniorMiddle, middle, senior];

export const contacts = [
  { icon: TbMapSearch, title: "Location", subTitle: "Chernivtsi, Ukraine" },
  {
    icon: MdOutlineMail,
    title: "Mail",
    subTitle: "mailto:zzabkopro@gmail.com",
  },
  { icon: AiOutlinePhone, title: "Phone", subTitle: "tel:+380632912519" },
];
