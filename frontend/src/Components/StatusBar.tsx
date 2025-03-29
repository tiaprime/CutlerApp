import React from "react";

const StatusBar = () => {
  return (
    <header className="self-stretch pt-5 w-full min-h-[46px]">
      <div className="flex justify-between items-center w-full">
        <time className="flex-1 shrink gap-2.5 self-stretch pr-1.5 pl-4 my-auto text-lg leading-none text-center text-black whitespace-nowrap basis-0 font-[590]">
          9:41
        </time>
        <div className="flex shrink-0 self-stretch my-auto h-2.5 w-[124px]" />
        <div className="flex flex-1 shrink gap-2 justify-center items-center self-stretch pr-4 pl-1.5 my-auto basis-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9871d7ed7ffec8a967e5c826804dd58678320908?placeholderIfAbsent=true&apiKey=9858644d0b1e49e4a1c09207680cb6e9"
            alt="Signal strength"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.58] w-[19px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57c775d7922ef9a771666dd4a111a558d5860bc5?placeholderIfAbsent=true&apiKey=9858644d0b1e49e4a1c09207680cb6e9"
            alt="Battery level"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[17px]"
          />
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
