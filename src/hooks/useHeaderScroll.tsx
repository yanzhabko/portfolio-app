import { useState, useRef, useEffect } from "react";
export default function useHandleScroll() {
  const prevScroll = useRef(0);
  const [isVisible, setVisible] = useState<"down" | "up" | "default">(
    "default"
  );

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY < 40) {
        setVisible("default");
      } else if (scrollY > prevScroll.current) {
        setVisible("down");
      } else if (scrollY < prevScroll.current) {
        setVisible("up");
      }
      prevScroll.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isVisible };
}
