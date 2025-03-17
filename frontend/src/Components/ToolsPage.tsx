"use client";
import React from "react";
import StatusBar from "./StatusBar";
import Header from "./Header";
import ToolCard from "./ToolCard";
import BottomNavigation from "./BottomNavigation";

const ToolsPage: React.FC = () => {
  const toolCards = [
    { title: "Callings" },
    { title: "Family Home Evening Groups" },
    { title: "Ministering Assignments" },
  ];

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <StatusBar />
      <div className="flex flex-col gap-11 px-5 pt-9">
        <Header title="Tools" />
        <div className="flex flex-col gap-11">
          {toolCards.map((card, index) => (
            <div key={index} className="flex flex-col gap-5">
              <ToolCard title={card.title} />
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation />
    </main>
  );
};

export default ToolsPage;
