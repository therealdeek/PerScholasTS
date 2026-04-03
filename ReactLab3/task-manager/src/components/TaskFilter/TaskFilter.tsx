import type { TaskFilterProps, TaskStatus } from "../../types";

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  // Called whenever the status dropdown changes
  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;

    // If the user picked "all", we send no status filter (undefined)
    // Otherwise we send the selected status
    onFilterChange({
      status: value === "all" ? undefined : (value as TaskStatus),
    });
  }

  // Called whenever the priority dropdown changes
  function handlePriorityChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;

    onFilterChange({
      priority:
        value === "all" ? undefined : (value as "low" | "medium" | "high"),
    });
  }

  return (
    <div>
      {/* Status Filter */}
      <label htmlFor="status-filter">Status</label>
      <select id="status-filter" onChange={handleStatusChange}>
        <option value="all">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Priority Filter */}
      <label htmlFor="priority-filter">Priority</label>
      <select id="priority-filter" onChange={handlePriorityChange}>
        <option value="all">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}

export default TaskFilter;
