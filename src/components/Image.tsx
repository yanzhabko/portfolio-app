import { FC } from "react";

interface ImageProps {
  src: string;
  className?: string;
}

const Image: FC<ImageProps> = ({ src, className }) => {
  return (
    <img src={src} className={`${className} bg-center bg-cover bg-no-repeat`} />
  );
};

export default Image;
