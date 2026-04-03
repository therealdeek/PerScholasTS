import type { TaskItemProps } from "../../types";

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  // This function returns a color based on the task's priority
  function getPriorityColor(priority: string): string {
    if (priority === "high") return "red";
    if (priority === "medium") return "orange";
    return "green";
  }

  // This function returns a background color based on the task's status
  function getStatusBackground(status: string): string {
    if (status === "completed") return "#d4edda";
    if (status === "in-progress") return "#fff3cd";
    return "#f8f9fa";
  }

  return (
    <div
      style={{
        backgroundColor: getStatusBackground(task.status),
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
      }}
    >
      {/* Task Title */}
      <h3>{task.title}</h3>

      {/* Task Description */}
      <p>{task.description}</p>

      {/* Status Buttons */}
      <div>
        <button
          onClick={() => onStatusChange(task.id, "pending")}
          disabled={task.status === "pending"}
        >
          Pending
        </button>

        <button
          onClick={() => onStatusChange(task.id, "in-progress")}
          disabled={task.status === "in-progress"}
        >
          In Progress
        </button>

        <button
          onClick={() => onStatusChange(task.id, "completed")}
          disabled={task.status === "completed"}
        >
          Completed
        </button>

        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>

      {/*conditional color */}
      <p>
        Priority:{" "}
        <span
          style={{ color: getPriorityColor(task.priority), fontWeight: "bold" }}
        >
          {task.priority}
        </span>
      </p>

      {/* Due Date */}
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>

      {/*only shows if task is completed */}
      {task.status === "completed" && (
        <p style={{ color: "green", fontWeight: "bold" }}>✅ Completed</p>
      )}

      {/*only shows if priority is high AND task is not completed */}
      {task.priority === "high" && task.status !== "completed" && (
        <p style={{ color: "red" }}>⚠️ High Priority</p>
      )}
    </div>
  );
}

export default TaskItem;
