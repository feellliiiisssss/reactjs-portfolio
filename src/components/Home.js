import React from "react";

const Home = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-[url('/public/bgHome.png')] bg-cover">
      <div className="text-white flex flex-col gap-4">
        <p className="font-bebas-neue md:text-3xl text-xl text-center text-[#EFEADF]">it's about</p>
        <div className="md:text-7xl text-4xl text-center font-lemon-reg font-bold tracking-wide font-outline-1">
          <p>ARLYNANDHITA</p>
          <p>FELISYA</p>
        </div>
        <div className="flex justify-center">
          <div className="text-[#503B40] bg-white w-fit h-fit font-medium rounded-full text-center md:px-5 md:py-2.5 px-3 py-1.5 text-sm md:text-lg border-solid border-2 border-[#503B40]">
            Graphic Design & Junior Front-End Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
