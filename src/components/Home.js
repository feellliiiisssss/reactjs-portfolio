import React from "react";

const Home = () => {
  return (
    <div className="m-auto min-h-screen flex items-center justify-center bg-[#FFCC1D]">
      <div className="text-white">
        <p className="font-['Reem_Kufi'] md:text-xl text-center text-[#0B4619] pt-44">it's about</p>
        <p className="md:text-9xl text-7xl text-center font-['Bebas_Neue'] tracking-wide">ARLYNANDHITA</p>
        <p className="md:text-9xl text-7xl text-center font-['Bebas_Neue'] tracking-wide">FELISYA</p>
        <div className="flex justify-center">
          <button type="button" class="text-white bg-[#0B4619] hover:bg-[#0A3A15] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
