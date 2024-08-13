import { useEffect, useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
    document.body.classList.toggle("overflow-hidden", true);
  };
  const handleCloseModal = () => {
    setOpen(false);
    document.body.classList.toggle("overflow-hidden", false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767.99) {
        setOpen(false);
        document.body.classList.toggle("overflow-hidden", false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    open,
    onClose: handleCloseModal,
    onOpen: handleOpenModal,
  };
};

export default useModal;
