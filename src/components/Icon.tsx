import { FC, ComponentType } from "react";

interface IconProps {
  icon: ComponentType<{ className?: string }>;
  className?: string;
}

const Icon: FC<IconProps> = ({ icon, className }) => {
  const Icon = icon;
  return <Icon className={`${className} text-[26px]`} />;
};

export default Icon;
