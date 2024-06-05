import React from "react";
import Image from "next/image";

const Companies = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between p-6">
        {/* Text Section */}
        <div className="mb-6 sm:ml-24 lg:mb-0 lg:w-1/2">
          <h1 className="sm:text-[48px] text-[30px] text-[#333333] font-bold mb-4">
            У вас вопрос кто мы <br /> а кто мы блин
          </h1>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </p>
        </div>
        {/* Logos Section */}
        <div className="flex flex-wrap lg:w-1/2 justify-center lg:justify-end gap-4 sm:relative">
          <img
            src="/1.png"
            alt="Scania"
            className="h-16 w-auto sm:absolute sm:top-[10px] sm:left-[10px]"
          />
          <img
            src="/2.png"
            alt="Volvo"
            className="h-16 w-auto  md:w-auto md:h-16 sm:absolute sm:top-[10px] sm:left-[320px]  "
          />
          <img
            src="/3.png"
            alt="MAN"
            className="h-16 w-auto  md:w-auto md:h-16 sm:absolute sm:top-[100px] sm:left-[150px]"
          />
          <img
            src="/4.png"
            alt="DAF"
            className="h-8 w-auto md:w-auto md:h-16  sm:absolute sm:top-[220px] sm:left-[10px]"
          />
          <img
            src="/5.png"
            alt="Renault"
            className="h-22 w-auto md:w-auto md:h-16  sm:absolute sm:top-[220px] sm:left-[320px]"
          />
        </div>
      </div>
    </>
  );
};

export default Companies;
