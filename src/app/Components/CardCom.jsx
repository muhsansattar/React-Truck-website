import React from "react";
import Card from "./Card";
const CardCom = () => {
  const textOfCard = [
    {
      heading: "Б/у запчасти для грузовых авто из Европы",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
      src: "/C1.png",
    },
    {
      heading: "Автомойка грузовых и легковых авто",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
      src: "/card.png",
    },
    {
      heading: "Пункт замены масла легковых авто",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
      src: "/C3.png",
    },
    {
      heading: "Магазин аксессуаров",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
      src: "/C4.png",
    },
  ];
  return (
    <div className="">
      <div className="flex justify-center items-center mt-10">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-[#333333] mb-2">
            Любые услуги за ваши денишки
          </h1>
          <p className="text-base md:text-lg font-normal text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nunc
            odio in et, lectus sit lorem id integer.
          </p>
        </div>
      </div>
      <div className=" grid gap-4 m-4 sm:grid-cols-2 sm:px-28 ">
        {textOfCard.map((data, index) => (
          <Card
            key={index}
            heading={data.heading}
            text={data.text}
            src={data.src}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCom;
