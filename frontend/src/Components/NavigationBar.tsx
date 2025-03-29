"use client";
import React, { useState } from "react";

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <nav className="flex z-10 flex-col items-center px-20 pt-5 pb-2 bg-zinc-100">
      <div className="max-w-full w-[113px]">
        <div className="flex gap-10 w-full">
          <button
            onClick={() => setActiveTab(0)}
            aria-label="Home"
            className={activeTab === 0 ? "text-sky-800" : ""}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7d568f0bb167bb9bb564a016fed78188dcd90f5?placeholderIfAbsent=true&apiKey=9858644d0b1e49e4a1c09207680cb6e9"
              alt="Home"
              className="object-contain shrink-0 self-start aspect-square w-[22px]"
            />
          </button>
          <button
            onClick={() => setActiveTab(1)}
            aria-label="Calendar"
            className={`flex overflow-hidden flex-1 justify-center items-center py-0.5 pr-px pl-0.5 min-h-6 rounded-[32px] ${activeTab === 1 ? "text-sky-800" : ""}`}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/646de8d544efc33da7481d95edd8a3ac47f00c92?placeholderIfAbsent=true&apiKey=9858644d0b1e49e4a1c09207680cb6e9"
              alt="Calendar"
              className="object-contain self-stretch my-auto w-5 aspect-square"
            />
          </button>
        </div>
        <div className="flex justify-center mt-3.5">
          <div
            className={`shrink-0 w-2 h-2 bg-sky-800 rounded-full ${activeTab === 1 ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
