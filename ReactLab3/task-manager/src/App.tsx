import { useState } from 'react';
import type { Task, TaskStatus } from './types';
import TaskList from './components/Tasklist/Tasklist';
import TaskFilter from './components/TaskFilter/TaskFilter';

// Our initial list of tasks — this is the starting data for the app
const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    status: 'pending',
    priority: 'low',
    dueDate: '2024-01-01',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    status: 'pending',
    priority: 'medium',
    dueDate: '2024-01-02',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description 3',
    status: 'pending',
    priority: 'high',
    dueDate: '2024-01-03',
  },
];

function App() {
  // State 1: the full list of tasks
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // State 2: the currently active filters
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  // Derived value — computed fresh every render, not stored in state
  const filteredTasks = tasks.filter((task) => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
  });

  // Updates a task's status when a button is clicked in TaskItem
  function handleStatusChange(taskId: string, newStatus: TaskStatus) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  }

  // Removes a task from the list when Delete is clicked in TaskItem
  function handleDelete(taskId: string) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId),
    );
  }

  // Update the filters when dropdowns change in TaskFilter
  function handleFilterChange(newFilters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) {
    setFilters((previousFilters) => ({
      ...previousFilters,
      ...newFilters,
    }));
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <h1>Task Manager</h1>

      {/* Pass handleFilterChange down to TaskFilter */}
      <TaskFilter onFilterChange={handleFilterChange} />

      {/* Pass the filtered list and handlers down to TaskList */}
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;