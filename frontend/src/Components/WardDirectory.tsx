import React, { useState } from "react";
import "./WardDirectory.css";
import ToolsHeader from "./ToolsPage/ToolsHeader"; // ✅ Header
import BottomNavigation from "./BottomNavigation"; // ✅ Footer

const people = [
  { lastName: "Bennett", firstName: "Liam" },
  { lastName: "Brown", firstName: "Sophia" },
  { lastName: "Carlson", firstName: "Mason" },
  { lastName: "Chang", firstName: "Olivia" },
  { lastName: "Davis", firstName: "James" },
  { lastName: "Evans", firstName: "Charlotte" },
  { lastName: "Fisher", firstName: "Henry" },
  { lastName: "Garcia", firstName: "Ella" },
  { lastName: "Harris", firstName: "Benjamin" },
  { lastName: "Jackson", firstName: "Lily" },
  { lastName: "Kim", firstName: "Samuel" },
  { lastName: "Lopez", firstName: "Ava" },
  { lastName: "Mitchell", firstName: "Ethan" },
  { lastName: "Nelson", firstName: "Amelia" },
  { lastName: "Owens", firstName: "Alexander" },
  { lastName: "Parker", firstName: "Scarlett" },
  { lastName: "Quinn", firstName: "Logan" },
  { lastName: "Reed", firstName: "Mia" },
  { lastName: "Smith", firstName: "Noah" },
  { lastName: "Taylor", firstName: "Emily" },
  { lastName: "Underwood", firstName: "Jacob" },
  { lastName: "Vargas", firstName: "Zoe" },
  { lastName: "Walker", firstName: "Nathan" },
  { lastName: "Xavier", firstName: "Penelope" },
  { lastName: "Young", firstName: "Lucas" },
  { lastName: "Zimmerman", firstName: "Grace" },
];

const groupByLetter = (people: any[]) => {
  return people.reduce((acc, person) => {
    const letter = person.lastName[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(person);
    return acc;
  }, {} as { [key: string]: any[] });
};

const WardDirectory: React.FC = () => {
  const [search, setSearch] = useState("");
  const groupedPeople = groupByLetter(people);

  const filteredPeople = Object.keys(groupedPeople).reduce((acc, letter) => {
    const filteredNames = groupedPeople[letter].filter(
      (person: { lastName: string; firstName: string }) =>
        person.lastName.toLowerCase().includes(search.toLowerCase()) ||
        person.firstName.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredNames.length > 0) acc[letter] = filteredNames;
    return acc;
  }, {} as { [key: string]: any[] });

  const scrollToLetter = (letter: string) => {
    const section = document.getElementById(letter);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <ToolsHeader title="Ward Directory" />
      <div className="ward-container">
        <div className="ward-card">
          <h1 className="ward-title">Ward Directory</h1>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Go</button>
          </div>

          <div className="ward-list">
            {Object.keys(filteredPeople).length > 0 ? (
              Object.keys(filteredPeople).map((letter) => (
                <div key={letter} className="ward-group" id={letter}>
                  <h2 className="ward-letter">{letter}</h2>
                  <ul className="ward-names">
                    {filteredPeople[letter].map((person, index) => (
                      <li
                        key={`${person.lastName}-${person.firstName}-${index}`}
                        className="ward-person"
                      >
                        <strong>{person.lastName}</strong>, {person.firstName}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="no-records">No records found</p>
            )}
          </div>

          <div className="alphabet-scroll">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
              <span key={letter} onClick={() => scrollToLetter(letter)}>
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
      <BottomNavigation /> {/* ✅ Added Footer */}
    </>
  );
};

export default WardDirectory;
