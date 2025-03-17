import React from "react";

interface ToolCardProps {
  title: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title }) => {
  return (
    <article className="w-full text-2xl font-bold text-center text-black rounded-3xl bg-zinc-300 h-[132px] flex items-center justify-center">
      {title}
    </article>
  );
};

export default ToolCard;
