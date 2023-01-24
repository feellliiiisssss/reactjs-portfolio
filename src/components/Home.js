import React from "react";

const Home = () => {
  return (
    <div className="m-auto min-h-screen flex items-center justify-center bg-[url('/public/bgHome.png')] bg-cover">
      <div className="text-white flex flex-col gap-8">
        <p className="font-bebas-neue md:text-3xl text-xl text-center text-[#EFEADF]">it's about</p>
        <div className="md:text-7xl text-4xl text-center font-lemon-reg font-bold tracking-wide font-outline-2">
          <p>ARLYNANDHITA</p>
          <p>FELISYA</p>
        </div>
        <div className="flex justify-center">
          <div className="text-[#503B40] bg-white w-fit h-fit font-medium rounded-full text-center px-5 py-2.5 border-solid border-2 border-[#503B40]">
            Graphic Design & Junior Front-End Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
