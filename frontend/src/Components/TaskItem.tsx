'use client';
import React, { useState } from 'react';
import { Task } from './TaskList';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <article className="flex relative flex-col justify-center w-full min-h-14">
      <div className="flex absolute inset-0 z-0 w-full min-h-14" />
      <div className="flex z-0 gap-4 px-4 py-1 w-full min-h-14">
        <p className="overflow-hidden flex-1 shrink text-base tracking-wide basis-0 text-zinc-900">
          {task.text}
        </p>
        <div className="flex gap-2.5 items-center my-auto w-11">
          {task.hasIcon ? (
            <div className="flex flex-col justify-center items-center self-stretch py-1 pr-1 my-auto">
              <div className="flex justify-center items-center px-2 py-3 rounded-[100px]">
                <img
                  src={task.iconUrl}
                  alt="Task icon"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
          ) : task.hasEmptyIcon ? (
            <div className="flex flex-col justify-center items-center self-stretch py-1 pr-1 my-auto">
              <div className="flex justify-center items-center px-2 py-3 rounded-[100px]">
                <div className="flex self-stretch my-auto w-6 min-h-0.5" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center self-stretch py-1 pr-1 my-auto w-11">
              <button
                className="flex relative justify-center items-start p-3 w-10 rounded-[100px]"
                onClick={handleToggle}
                aria-checked={isCompleted}
                role="checkbox"
              >
                {isCompleted ? (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dbd5e6c-ad5d-4a94-a10b-85e7df895bd7?placeholderIfAbsent=true&apiKey=9858644d0b1e49e4a1c09207680cb6e9"
                    alt="Checked"
                    className="object-contain self-stretch my-auto bg-sky-800 rounded-sm aspect-square h-[18px] w-[18px]"
                  />
                ) : (
                  <>
                    <div className="flex z-0 shrink-0 my-auto rounded-sm border border-sky-800 border-solid h-[18px] w-[18px]" />
                    <div className="flex absolute top-2/4 left-2/4 z-0 shrink-0 self-start w-6 h-6 -translate-x-2/4 -translate-y-2/4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default TaskItem;
