import React from 'react';
import BottomNavigation from '../Components/BottomNavigation';
import Calendar from '../Components/Calendar';
import CalendarDay from '../Components/CalendarDay';
import CalendarHeader from '../Components/CalendarHeader';
import TaskItem from '../Components/TaskItem';
import TaskList from '../Components/TaskList';
import CalendarWidget from '../Components/CalendarWidget';

const CalendarPage: React.FC = () => {
  return (
    <>
      <div>
        {/* <CalendarHeader /> */}
        <CalendarWidget />
        <BottomNavigation />
      </div>
    </>
  );
};

export default CalendarPage;
