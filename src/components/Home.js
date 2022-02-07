import React from "react";

const Home = () => {
  return (
    <div className="m-auto min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(to bottom, #ffcc1d 50%, #0b4619 100%)" }}>
      <div className="text-white">
        <p className="font-['Reem_Kufi'] flex justify-center md:text-xl text-center">it's about</p>
        <p className="md:text-9xl text-7xl text-center font-['Bebas_Neue'] tracking-wide">ARLYNANDHITA</p>
        <p className="md:text-9xl text-7xl text-center font-['Bebas_Neue'] tracking-wide">FELISYA</p>
        <div className="flex justify-center">
          <button
            type="button"
            class="text-white bg-[#0B4619] hover:bg-[#0A3A15] focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
