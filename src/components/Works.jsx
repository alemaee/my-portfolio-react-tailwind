import React from "react";

function Works() {
  return (
    <div className="max-w-[1240px] mx-auto py-1 p-8">
      <div className="flex flex-col justify-center text-center w-full px-2 py-20 ">
        <h1 className="text-7xl sm:text-5xl font-bold font-bF ">
          My Sample Works
        </h1>
      </div>

      <div className="grid md:grid-cols-3">
        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
          <div>
            <p className="text-2xl font-bold py-4 flex">Sample 1</p>
          </div>
        </div>
        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
          <div>
            <p className="text-2xl font-bold py-4 flex">Sample 1</p>
          </div>
        </div>
        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
          <div>
            <p className="text-2xl font-bold py-4 flex">Sample 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
