import React from 'react';

const CalendarHeader = () => {
  return (
    <header className="flex gap-6 mt-5 w-full text-4xl font-medium leading-none text-black whitespace-nowrap max-w-[302px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a58d10be2200b24629845d40c0046d1955874c45?placeholderIfAbsent=true&apiKey=9858644d0b1e49e4a1c09207680cb6e9"
        alt="Calendar icon"
        className="object-contain shrink-0 self-start mt-3.5 w-11 aspect-square"
      />
      <h1 className="grow shrink my-auto w-[133px]">Calendar</h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d544b1d5fa1eb81ccb74d3d3549fe47c0557ac9?placeholderIfAbsent=true&apiKey=9858644d0b1e49e4a1c09207680cb6e9"
        alt="Profile"
        className="object-contain shrink-0 aspect-square w-[60px]"
      />
    </header>
  );
};

export default CalendarHeader;
