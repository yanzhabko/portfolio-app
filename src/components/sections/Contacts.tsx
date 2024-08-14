import { FC } from "react";
import Title from "../Title";
import Card from "../Contacts/Card";
import { contacts } from "../../utils/constants/constant";

const Contacts: FC = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="container flex flex-col gap-[18px] items-center lg:items-start">
        <Title
          title="Contact Us"
          type="title"
          className="text-orange-300 !font-[500] uppercase"
        />
        <div className="flex flex-col gap-[25px] items-center lg:items-start">
          <Title
            title="Don't be shy! Hit me up! 👇🏻"
            type="subtitle"
            className="!font-[600]"
          />
          <div className="flex flex-col justify-center lg:flex-row lg:justify-start gap-[40px]">
            {contacts.map((item, index) => (
              <Card
                key={index}
                id={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
