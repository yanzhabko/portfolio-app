import { useEffect, useState } from "react";

export default function useHandleResize() {
  const [isOpen, setOpen] = useState(false);

  const onClickMenu = () => {
    setOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden", !isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767.99) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen]);

  return { isOpen, onClickMenu };
}
