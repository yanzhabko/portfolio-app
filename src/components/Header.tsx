import { FC } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import useHandleScroll from "../hooks/useHandleScroll";
import useHandleResize from "../hooks/useHandleResize";

const Header: FC = () => {
  const isVisible = useHandleResize();
  const { isOpen, onClickMenu } = useHandleResize();
  return (
    <header className={`h-auto w-full ${isOpen && ""}`}>
      <div className="container w-full flex justify-between items-center py-[20px] xl:py-[30px]">
        <Link to="/" className="text-[22px] md:text-[24px]">
          Yan Zhabko
        </Link>
        <nav className="hidden gap-[25px] text-[15px] md:text-[20px] xl:flex">
          <Link to="#about">About</Link>
          <Link to="#experience">Experience</Link>
          <Link to="#projects">Projects</Link>
          <Link to="#contact">Contact</Link>
        </nav>
        {!isOpen ? (
          <RxHamburgerMenu
            className="text-[24px] md:text-[26px]  xl:hidden"
            onClick={onClickMenu}
          />
        ) : (
          <div className="relative">
            <IoMdClose
              className="text-[24px] md:text-[26px] xl:hidden"
              onClick={onClickMenu}
            />
            <div
              className={`bg-white max-w-[200px] w-[150px] text-black  xl:hidden absolute right-0 top-[100%] py-[15px] z-10 rounded-b-md shadow-2xl`}
            >
              <nav className="flex text-[18px] flex-col gap-[15px] items-center">
                <Link to="#about">About</Link>
                <Link to="#experience">Experience</Link>
                <Link to="#projects">Projects</Link>
                <Link to="#contact">Contact</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
