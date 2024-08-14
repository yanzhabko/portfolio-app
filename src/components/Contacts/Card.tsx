import { FC, ComponentType } from "react";
import Icon from "../Icon";
import Title from "../Title";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}

const Card: FC<CardProps> = ({ id, icon, title, subtitle }) => {
  return (
    <div className="flex gap-[20px] flex-col text-center lg:flex-row lg:text-left items-center">
      <div className="bg-white-100 rounded-full shadow-xl p-[10px]">
        <Icon icon={icon} className="text-orange-300 !text-[30px]" />
      </div>
      <div className="flex flex-col gap-[5px]">
        <Title title={title} type="subtitle" className="!font-[600]" />
        {id === 0 ? (
          <Title
            title={subtitle.replace(/^(mailto:|tel:)/, "")}
            type="text"
            className="hover:text-orange-300 cursor-pointer"
          />
        ) : (
          <Link to={subtitle} className="hover:*:text-orange-300">
            {
              <Title
                title={subtitle.replace(/^(mailto:|tel:)/, "")}
                type="text"
              />
            }
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
