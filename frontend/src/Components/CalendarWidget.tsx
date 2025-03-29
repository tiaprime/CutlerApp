'use client';
import React, { useState } from 'react';

const daysInMonth = 31;
const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const startDayOffset = 5; // Adjust this to match the correct starting weekday

const tasks = [
  'Assign Ward Secretary',
  'Assign Ward Prayer Leader',
  'Agenda for Sunday',
  'Interview with Elise',
  'Interview with Ryan',
  'Prepare weekly report',
  'Follow up on assignments',
  'Confirm meeting with Bishop',
  'Update member records',
  'Plan activity night',
];

const CalendarDay: React.FC<{
  day: number;
  isSelected: boolean;
  onClick: () => void;
}> = ({ day, isSelected, onClick }) => (
  <button
    className={`w-12 h-12 flex items-center justify-center rounded-full font-semibold transition duration-200
      ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-blue-200 text-gray-800'}`}
    onClick={onClick}
  >
    {day}
  </button>
);

const CalendarWidget: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number>(19);
  const [completedTasks, setCompletedTasks] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleTask = (task: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [task]: !prev[task],
    }));
  };

  return (
    <div className="flex flex-col items-center h-screen p-6 bg-gray-200">
      {/* Calendar Section */}
      <section className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <button
            aria-label="Previous month"
            className="px-3 py-1 text-lg bg-gray-300 rounded-md hover:bg-gray-400"
          >
            {'<'}
          </button>
          <h2 className="text-xl font-bold">March 2025</h2>
          <button
            aria-label="Next month"
            className="px-3 py-1 text-lg bg-gray-300 rounded-md hover:bg-gray-400"
          >
            {'>'}
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-sm text-gray-600 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center font-semibold">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: startDayOffset }).map((_, i) => (
            <div key={`empty-${i}`} className="w-12 h-12"></div>
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <CalendarDay
              key={day}
              day={day}
              isSelected={day === selectedDate}
              onClick={() => setSelectedDate(day)}
            />
          ))}
        </div>
      </section>

      {/* Task List Section */}
      <section className="w-full max-w-md flex-1 overflow-y-auto mt-4 p-4 bg-white rounded-xl shadow-lg">
        <h3 className="text-lg font-bold mb-2">
          Tasks for {selectedDate} March
        </h3>
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task}
              className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
            >
              <span className="font-medium">{task}</span>
              <input
                type="checkbox"
                checked={!!completedTasks[task]}
                onChange={() => toggleTask(task)}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CalendarWidget;
