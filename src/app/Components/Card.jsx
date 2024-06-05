import React from "react";

function Card({ heading, text, src }) {
  return (
    <div className="container flex justify-center items-center p-4">
      <div className="relative flex flex-col md:flex-row p-4 bg-[#F4F6FA] max-w-lg md:max-w-2xl w-full m-0 rounded-lg">
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold text-left text-[#333333] font-inter mb-2 md:mb-0 md:mr-4">
            {heading}
          </h1>
          <p className="text-base font-normal text-left text-[#333333] font-inter mb-4 md:mb-0 md:w-2/3">
            {text}
          </p>
        </div>
        <img
          src={src}
          alt="Card Image"
          className="w-full h-auto md:w-1/3  md:h-auto object-cover"
        />
      </div>
      
    </div>
  );
}

export default Card;
