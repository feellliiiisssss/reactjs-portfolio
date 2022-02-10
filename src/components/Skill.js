import React from "react";

const Skill = () => {
  return (
    <div className="m-auto min-h-screen md:flex md:items-center p-6 text-justify bg-[#0B4619]">
      <div className="container">
        <div className="font-['Playfair_Display'] text-white text-6xl tracking-wide text-center uppercase">Skills</div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="my-6">
            <img src="./skill/HTML.png"></img>
          </div>
          <div className="my-6">
            <img src="./skill/CSS.png"></img>
          </div>
          <div className="my-6">
            <img src="./skill/JS.png"></img>
          </div>
          <div className="mb-6">
            <img src="./skill/react.png"></img>
          </div>
          <div className="mb-6">
            <img src="./skill/Tailwind.png"></img>
          </div>
          <div className="mb-6">
            <img src="./skill/figma.png"></img>
          </div>
          <div className="mb-6">
            <img src="./skill/ps.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
