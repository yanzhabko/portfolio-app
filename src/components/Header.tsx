import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "../utils/constants/constant";
import NavLink from "./NavLink";
import useHeaderScroll from "../hooks/useHeaderScroll";
import useModal from "../hooks/useModal";
import Modal from "./Modal";

const Header: FC = () => {
  const { isVisible } = useHeaderScroll();
  const { open, onClose, onOpen } = useModal();
  const HiddenIconMenu = () => {
    if (open) {
      return (
        <IoMdClose
          className="text-[24px] md:text-[26px] xl:hidden"
          onClick={onClose}
        />
      );
    } else {
      return (
        <RxHamburgerMenu
          className="text-[24px] md:text-[26px]  xl:hidden"
          onClick={onOpen}
        />
      );
    }
  };

  return (
    <header
      className={`fixed bg-white z-10 h-auto w-full transition-transform ${
        isVisible === "down"
          ? "translate-y-[-100px]"
          : isVisible !== "default" && "shadow-xl"
      }`}
    >
      <div className="container w-full flex justify-between items-center py-[15px] xl:py-[20px]">
        <NavLink
          title="Yan.dev"
          link="/"
          className="text-[22px] md:text-[24px]"
          onClick={onClose}
          type="logo"
        />
        <nav className="hidden gap-[25px] text-[15px] md:text-[20px] xl:flex">
          {navLinks.map((item, index) => (
            <NavLink key={index} title={item.title} link={item.link} />
          ))}
        </nav>
        <div className="xl:hidden">
          {HiddenIconMenu()}
          <Modal open={open} onClose={onClose} navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};
export default Header;
