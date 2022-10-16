import React from "react";

function About() {
  return (
    <div className="max-w-[1240px] mx-auto py-1 p-8">
      <div className="flex flex-col justify-center text-center md:items-start w-full px-2 py-8 ">
        <h1 className="text-3xl font-bold font-bF ">So, who actually am I?</h1>
        <p className="py-3 text-2xl md:text-[16px] font-bF">
          Hey, Ela here! I'm being most creative on my own, I found my passion
          in designing doing ramdom things.
        </p>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
          <div>
            <p className="text-5xl font-bold py-4 flex">Designer</p>
          </div>
          <p className="text-2xl text-slate-700">
            I consider simple content layouts, clean designs and committed to
            creating awesome user interface and user experience.
          </p>

          <p className="text-1xl text-slate-500 py-10">
            Things I enjoy designing: UI/UX, Websites, Apps
            <p className="text-1xl text-slate-500 py-5">
              Design Tools: Figma, Adobe XD, Adobe Illustator, Photoshop
            </p>
          </p>
        </div>
        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
          <div>
            <p className="text-5xl font-bold py-4 flex">Frontend Developer</p>
          </div>
          <p className="text-2xl text-slate-900">
            I like to code things especially my own design. I enjoy bringing
            illustration in the browsers.
          </p>
          <p className="text-1xl text-slate-500 py-10">
            Languages: HTML, CSS, JavaScript | React
            <p className="text-1xl text-slate-500 py-5">
              Dev Tools: VS Code, Github, Terminal
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
