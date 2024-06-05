import React from "react";

const Map = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-4xl text-[#333333]  font-bold ml-4 lg:ml-20 mt-8">
            Где мы?
          </h2>
          <br />
          <br />
          <p className="text-gray-700 ml-4 lg:ml-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer. Lorem ipsum dolor <br />
            sit amet consectetur adipisicing elit. In consectetur libero magni
            pariatur, necessitatibus modi similique dolor minima facilis cum!
            <br />
            Eligendi minima ipsum libero similique exercitationem sapiente
            explicabo nihil alias. Veniam, fuga libero repellat <br />
          </p>
        </div>

        <div className="w-full lg:w-1/2 p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.1234567890123!2d8.5416942156789!3d47.376887654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDEyJzA5LjUiTiA4wrAyMyc1OC4yIlc!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
