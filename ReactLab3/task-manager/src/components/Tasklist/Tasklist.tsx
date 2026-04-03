import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  // Conditional rendering — if there are no tasks, show a message instead of an empty list
  if (tasks.length === 0) {
    return <p>No tasks found. Try changing your filters.</p>;
  }

  return (
    <div>
      {/*
        .map() transforms each Task object into a TaskItem component.
        - key={task.id} tells React how to track each item uniquely
        - task={task} passes the full task object as a prop
        - onStatusChange and onDelete are passed down from App.tsx
      */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
