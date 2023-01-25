import { data } from "autoprefixer";
import React, { useState } from "react";

const SkillSquare = (props) => {
  return (
    <div className="text-[#503B40] bg-white w-fit h-fit font-medium rounded-full text-center px-5 py-2.5 border-solid border-2 border-[#503B40]">
      {props.data}
    </div>
  );
};

const Skills = () => {
  const [array, setArray] = useState(["HTML", "CSS", "Javascript", "Typescript", "TailwindCSS", "ChakraUI", "Bootstrap", "React", "Figma", "Git", "Photoshop"]);

  return (
    <div className="min-h-max m-auto md:flex items-center justify-center md:p-40 px-10 py-20 bg-[#F5CBA7]">
      <div className="grid gap-10">
        <p className="text-[#FF491F] md:text-7xl text-4xl font-bold tracking-wide font-lemon-reg md:font-outline-4 font-outline-2">Skills & Experiences</p>
        <img src="skills.png" class="mb-5 md:mb-0 mx-auto md:mx-0 md:w-96 w-28"></img>
      </div>
      <div className="text-[#503B40] font-['Cabin'] grid md:grid-rows-2 gap-3 mx-16">
        <p className="text-[#FF491F] md:text-4xl text-3xl font-bold tracking-wide font-lemon-reg">Skills</p>
        <p className="lg:text-justify lg:text-xl font-medium text-justify">
          Hi! i’m Arlynandhita Felisya. I’m an undergraduate student of Information System 2021 at Multimedia Nusantara University, and I’m interested to design
          and programming.
        </p>
        <SkillSquare data={array}></SkillSquare>
      </div>
    </div>
  );
};

export default Skills;
