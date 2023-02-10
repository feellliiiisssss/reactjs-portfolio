import React, { useState } from "react";

const SkillSquare = ({ squares }) => {
  return (
    <div className="maumarah">
      {squares.map((square) => (
        <div className="inline-grid mr-2 mb-2 mt-2">
          <div className="text-white bg-[#FF491F] md:font-medium md:text-lg text-sm rounded-md text-center px-5 py-2.5">{square}</div>
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

  const [exp, setExp] = useState([
    { title: "Laboratory Assistant - Website", company: "Universitas Multimedia Nusantara", time: "Feb 2023 - Present" },
    { title: "Website Division - Front-end", company: "UMN Festival", time: "Mar 2022 - Dec 2022" },
    { title: "Volunteer - Design Division", company: "PT. Suryakata Teknologi Indonesia", time: "Jul 2021 - Sep 2021" },
  ]);

  return (
    <div className="min-h-max md:flex items-center justify-center md:p-32 px-8 py-20 bg-[#F5CBA7]">
      <div className="md:grid md:gap-10 md:grid-rows-2">
        <p className="text-[#FF491F] py-10 md:text-7xl text-4xl font-semibold tracking-wide font-lemon-reg md:font-outline-4 font-outline-2">
          Skills & Experiences
        </p>
        <img src="skills.png" class="mb-5 md:mb-0 mx-auto md:mx-0 md:w-96 w-28"></img>
      </div>
      <div className="text-[#503B40] font-['Cabin'] md:grid md:grid-rows-2 md:gap-3 md:mx-16">
        <p className="text-[#FF491F] md:text-4xl text-3xl font-bold tracking-wide font-lemon-reg pb-5 md:pb-0">Skills</p>
        <p className="lg:text-justify lg:text-xl font-medium text-justify">
          Hi! i’m Arlynandhita Felisya. I’m an undergraduate student of Information System 2021 at Multimedia Nusantara University, and I’m interested to design
          and programming.
        </p>
        <SkillSquare squares={squares}></SkillSquare>
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-black"></div>
        </div>
        <div>
          <p className="text-[#FF491F] md:text-3xl text-3xl font-bold tracking-wide font-lemon-reg md:pb-8 pb-5">Experiences</p>
          <p className="lg:text-justify lg:text-xl font-medium text-justify mb-2">
            Hi! i’m Arlynandhita Felisya. I’m an undergraduate student of Information System 2021 at Multimedia Nusantara University, and I’m interested to
            design and programming.
          </p>
          {exp.map((experiences) => (
            <div className="md:inline-grid mr-2 mb-2 mt-2">
              <div className="text-white bg-[#FF491F] md:font-medium md:text-lg text-sm rounded-md text-center px-5 py-2.5">
                <p className="font-lemon-reg">{experiences.title}</p>
                <p>{experiences.company}</p>
                <p>{experiences.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
