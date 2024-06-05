const HeroSection = () => {
  return (
    <div>
      
      <main className="container mx-auto px-4 pt-16">
        <div className="grid md:grid-cols-2 gap-8 sm:ml-16 items-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-800">
              Affordable truck service
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded">
              Чета сделать
            </button>
          </div>
          <div className="relative -mr-4">
            <img
              src="/truck.png" // Note the leading slash
              alt="Trucks"
              className="w-full h-auto object-right"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
