import React from "react";
import TaskItem from "./TaskItem";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  hasIcon?: boolean;
  iconUrl?: string;
  hasEmptyIcon?: boolean;
}

interface TaskListProps {
  tasks: Task[];
  className?: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, className = "" }) => {
  return (
    <section
      className={`mt-6 w-full bg-zinc-100 max-w-[331px] min-h-[282px] ${className}`}
    >
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
