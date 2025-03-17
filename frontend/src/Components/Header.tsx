import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <section className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <button className="flex justify-center items-center w-11 h-11 bg-sky-800 rounded-full">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[5px] h-[12px]"
          >
            <path
              d="M6.37686 13L1.4375 8.06061C0.854167 7.47728 0.854167 6.52274 1.4375 5.9394L6.37686 1"
              stroke="#E1E1E1"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="text-4xl font-bold text-black">{title}</h1>
      </div>
      <div className="rounded-full border border-black h-[42px] w-[42px]" />
    </section>
  );
};

export default Header;
