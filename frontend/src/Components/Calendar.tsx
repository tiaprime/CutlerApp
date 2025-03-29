'use client';
import React from 'react';
import StatusBar from './StatusBar';
import CalendarHeader from './CalendarHeader';
import CalendarWidget from './CalendarWidget';
import TaskList from './TaskList';
import NavigationBar from './NavigationBar';

function Calendar() {
  return (
    <main className="flex overflow-hidden flex-col items-center mx-auto w-full bg-zinc-100 max-w-[480px]">
      <StatusBar />
      <CalendarHeader />
      <CalendarWidget />
      <TaskList
        tasks={[
          { id: 1, text: 'Assign Ward Secretary', completed: true },
          { id: 2, text: 'Assign Ward Prayer Leader', completed: false },
          { id: 3, text: 'Agenda for Sunday', completed: false },
          {
            id: 4,
            text: 'Interview with Elise',
            completed: false,
            hasIcon: true,
            iconUrl:
              'https://cdn.builder.io/api/v1/image/assets/TEMP/87b2fb76-403b-4aac-827c-006f9e8550a6?placeholderIfAbsent=true&apiKey=9858644d0b1e49e4a1c09207680cb6e9',
          },
          {
            id: 5,
            text: 'Interview with Ryan',
            completed: false,
            hasIcon: true,
            iconUrl:
              'https://cdn.builder.io/api/v1/image/assets/TEMP/e0e41d05-9b8a-46df-b795-4695392bbeea?placeholderIfAbsent=true&apiKey=9858644d0b1e49e4a1c09207680cb6e9',
          },
        ]}
      />
      <section className="flex flex-col self-stretch pl-1.5 w-full">
        <NavigationBar />
        <TaskList
          tasks={[
            { id: 6, text: 'Interview Teresa', completed: false },
            {
              id: 7,
              text: 'Tithing Setlemen with Brianna',
              completed: false,
              hasEmptyIcon: true,
            },
          ]}
          className="self-center mt-0 w-full max-w-[331px]"
        />
      </section>
    </main>
  );
}

export default Calendar;
