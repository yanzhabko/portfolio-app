import { useState, useRef, useEffect } from "react";
export default function useHandleScroll() {
  const prevScroll = useRef(0);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY > 50) {
        setVisible(true);
      } else if (scrollY > prevScroll.current) setVisible(false);
      prevScroll.current = scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { isVisible };
}
