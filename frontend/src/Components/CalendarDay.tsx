import React from 'react';

interface CalendarDayProps {
  day: number;
  isSelected: boolean;
  onClick: () => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  isSelected,
  onClick,
}) => {
  if (isSelected) {
    return (
      <button
        className="text-white w-[30px]"
        onClick={onClick}
        aria-pressed="true"
      >
        <div className="bg-sky-800 h-[30px] min-h-[30px] rounded-[29px] w-[30px] flex items-center justify-center">
          {day}
        </div>
      </button>
    );
  }

  return (
    <button
      className="min-h-[30px] w-[30px]"
      onClick={onClick}
      aria-pressed="false"
    >
      {day}
    </button>
  );
};

export default CalendarDay;
