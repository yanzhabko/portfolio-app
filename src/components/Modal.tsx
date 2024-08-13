import { FC } from "react";
import NavLink from "./NavLink";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  navLinks: { title: string; link: string }[];
}

const Modal: FC<ModalProps> = ({ open, onClose, navLinks }) => {
  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className="bg-transparent absolute top-0 left-0 h-[100vh] w-[100vw]"
        onClick={onClose}
      ></div>
      <div className="relative">
        <div
          className="bg-white max-w-[200px] w-[150px] text-black xl:hidden absolute right-0 top-[100%] py-[15px] z-10 rounded-b-md shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex text-[18px] flex-col gap-[15px] items-center">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                title={item.title}
                link={item.link}
                onClick={onClose}
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Modal;
