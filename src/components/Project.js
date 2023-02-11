import React from "react";

const Project = () => {
  return (
    <div class="flex-grow border-t-4 border-[#362B44]">
      <div className="h-[70vh] flex flex-col items-center justify-center bg-cover bg-[url('/public/bgPorto.png')] bg-center">
        <div className="text-[#FFCC1D] flex flex-col gap-6">
          <div className="md:text-7xl text-5xl text-center font-lemon-reg font-bold tracking-wide font-outline-2">
            <p>Projects</p>
          </div>
          <p className="lg:text-justify lg:text-xl text-center text-black">Feel free to enjoy my work by click on button below</p>
          <div className="flex justify-center">
            <a href="https://drive.google.com/drive/folders/12HAZw42f5fYOJEqjZT-jtcn9aoJSWYYZ?usp=share_link">
              <div
                type="button"
                className="md:font-medium md:text-lg text-sm text-[#503B40] bg-[#FFCC1D] w-fit h-fit font-medium rounded-full text-center md:px-5 md:py-2.5 px-3 py-1.5 border-solid border-2 border-[#503B40]"
              >
                Get More
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
