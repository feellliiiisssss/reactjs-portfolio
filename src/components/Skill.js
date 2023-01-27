import React, { useState } from "react";

const SkillSquare = ({ squares }) => {
  return (
    <div className="maumarah">
      {squares.map((square) => (
        <div className="inline-grid m-1">
          <div className="text-[#503B40] bg-white font-medium rounded-full text-center px-5 py-2.5 border-solid border-2 border-[#503B40]">{square}</div>
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
  const [squares, setSquares] = useState([
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "TailwindCSS",
    "ChakraUI",
    "Bootstrap",
    "React",
    "Figma",
    "Git",
    "Photoshop",
  ]);

  const ExpSquare = ({ expsquares }) => {
    return (
      <div className="maumarah">
        {expsquares.map((exp) => (
          <div className="inline-grid m-1">
            <div className="text-[#503B40] bg-white font-medium rounded-full text-center px-5 py-2.5 border-solid border-2 border-[#503B40]">
              <h2>{exp.title}</h2>
              <p>{exp.company}</p>
              <p>{exp.time}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const Experiences = () => {
    const [exp, setExp] = useState([
      { title: "Website Division - Front-end developer", company: "UMN Festival", time: "Mar 2022 - Dec 2022" },
      { title: "Volunteer - Design Division", company: "PT. Suryakata Teknologi Indonesia", time: "Jul 2021 - Sep 2021" },
    ]);
  };

  return (
    <div className="min-h-max md:flex items-start md:p-40 bg-[#F5CBA7]">
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
        <SkillSquare squares={squares}></SkillSquare>
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-black"></div>
        </div>
        {/* <ExpSquare exp={exp}></ExpSquare> */}
      </div>
    </div>
  );
};

export default Skills;
