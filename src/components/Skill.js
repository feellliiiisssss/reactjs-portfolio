import React from "react";

const Skills = () => {
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
        <p className="lg:text-justify lg:text-xl text-justify">
          Right now, i’m searching for any experience in many areas, especially at design and give my effort to rise up my programming skills. It was a cool
          thing while we can saw a beautiful world inside the screen. Then, I am decide to attempt my design skill to make a beautiful website with my
          programming skill. I’m a friendly person so i can work as a team, but work individually is not a problem. Let’s be friend with me!
        </p>
      </div>
    </div>
  );
};

export default Skills;
