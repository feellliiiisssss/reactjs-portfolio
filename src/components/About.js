import React from "react";

const About = () => {
  return (
    <div className="min-h-max m-auto md:flex items-center justify-center md:p-32 px-8 py-20 bg-[#E2DBD1]">
      <img src="smile.png" class="md:pt-20 md:mx-10 mb-5 md:mb-0 mx-auto md:w-60 w-28"></img>
      <div className="text-[#503B40] font-['Cabin'] grid md:grid-rows-2 grid-rows-1 gap-3">
        <p className="text-[#FDE98F] md:text-7xl text-4xl font-bold md:py-3 tracking-wide font-lemon-reg md:font-outline-4 font-outline-2">ABOUT ME:</p>
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

export default About;
