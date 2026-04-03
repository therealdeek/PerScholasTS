# Task Manager

A React + TypeScript task management application built as part of the React Fundamentals module (SE-415, Lab 3).

## How to Run

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173` in your browser

## Features

- View a list of tasks with title, description, status, and priority
- Filter tasks by status and priority
- Change a task's status between pending, in-progress, and completed
- Delete tasks from the list
- Visual indicators for high priority and completed tasks

## Components

- **TaskList** — renders the full list of tasks using `.map()` with unique keys
- **TaskItem** — displays a single task with conditional rendering based on status and priority
- **TaskFilter** — dropdowns for filtering the task list

## Concepts Practiced

- List rendering with `.map()` and unique `key` props
- Conditional rendering with `&&` and ternary operators
- TypeScript interfaces and type aliases
- Unidirectional data flow and prop drilling
- Immutable state updates