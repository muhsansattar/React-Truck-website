"use client";

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log(formData);
  function changeHandler(event) {
    const { value, name } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      
      <section
        className="relative  bg-cover bg-center bg-no-repeat py-20 sm:py-32"
        style={{
          backgroundImage: `url('/driver.png')`,
        }}
      >
        <div className="flex justify-center sm:justify-end sm:mr-8 md:mr-20 lg:mr-40 xl:mr-60">
          <div className="w-full sm:w-2/5 md:w-1/2 lg:w-2/5 xl:w-[40%] p-4 sm:p-8 bg-white flex items-center justify-center rounded-lg">
            <div className=" w-60 sm:w-full max-w-md">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-zinc-500 font-bold mb-4">
                Остались <br />
                вопросы?
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="username" className="sr-only">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Имя"
                    value={formData.username}
                    onChange={changeHandler}
                    className="w-full px-4 bg-blue-100 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="sr-only">
                    Номер телефона
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={changeHandler}
                    name="password"
                    placeholder="Номер телефона"
                    className="w-full px-4 py-2 bg-blue-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
