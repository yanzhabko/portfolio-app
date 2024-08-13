import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  return (
    <div className="text-[54px] text-center text-red-500">Page Not Found</div>
  );
};

export default NotFound;
