import React from "react";

const Skill = () => {
  return (
    <div className="min-h-max w-auto flex items-center justify-center p-6 bg-[#0B4619]">
      <div className="container">
        <div className="font-['Playfair_Display'] text-white md:text-6xl text-[38px] tracking-wide text-center uppercase">Skills</div>
        <div className="pl-6 pt-4 grid grid-cols-3 md:grid-cols-7 lg:gap-12 sm:gap-4 md:pt-4">
          <div className="md:my-10 my-2">
            <img src="./skill/HTML.png" className="h-20 lg:h-40"></img>
          </div>
          <div className="md:my-10 my-2">
            <img src="./skill/CSS.png" className="h-20 lg:h-40"></img>
          </div>
          <div className="md:my-10 my-2">
            <img src="./skill/JS.png" className="h-20 lg:h-40"></img>
          </div>
          <div className="md:my-10 my-2">
            <img src="./skill/react.png" className="h-20 lg:h-40"></img>
          </div>
          <div className="md:my-10 my-2">
            <img src="./skill/Tailwind.png" className="h-20 lg:h-40"></img>
          </div>
          <div className="md:my-10 my-2">
            <img src="./skill/figma.png" className="h-20 lg:h-40"></img>
          </div>
          <div className="md:mt-10 mt-2 col-start-2 md:col-auto">
            <img src="./skill/ps.png" className="h-20 lg:h-40"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
