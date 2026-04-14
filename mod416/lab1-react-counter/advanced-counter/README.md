# 🧮 Lab 1: Advanced Counter with React & TypeScript

> A beginner-friendly guide to understanding this project — what it does, how to run it, and what you should learn from it.

---

## 📖 What Is This Project?

This is a **React + TypeScript** web application that implements an **Advanced Counter**. It's built using [Vite](https://vite.dev/) as the development tool and demonstrates two of the most important React hooks for beginners:

- `useState` — for managing and updating state (data that changes over time)
- `useEffect` — for running side effects in response to state changes

---

## 🧠 What Is Supposed to Happen?

When you open the app in your browser, you'll see a counter interface. Here's what each part does:

### 🔢 The Counter Display
- Shows the **current count** (starts at `0`)
- Shows a **save status** label — either `idle`, `saving`, or `saved`

### 🎚️ The Step Input
- A number input that lets you choose **how much to increment or decrement** by each click
- Default step is `1`, but you can change it to `5`, `10`, or anything else

### 🕹️ The Buttons
| Button | What It Does |
|--------|--------------|
| **Increment** | Adds the step value to the current count |
| **Decrement** | Subtracts the step value from the current count |
| **Reset** | Sets the count back to `0` and clears the history |

### ⌨️ Keyboard Shortcuts
You can also use your **keyboard arrow keys**:
- `↑ ArrowUp` — increments the counter by the current step
- `↓ ArrowDown` — decrements the counter by the current step

### 📜 Count History
- Every change (increment, decrement, or reset) is logged in a **history list** shown below the buttons
- If no changes have been made yet, it displays: *"No history yet."*

### 💾 Auto-Save with `localStorage`
- After every count change, the app **automatically saves** the current count to your browser's `localStorage`
- A `useEffect` hook watches for count changes and saves the value after a **300ms delay** (a pattern called "debouncing")
- The save status updates from `saving` → `saved` once it completes

---

## 🗂️ Project File Structure

```
advanced-counter/
├── src/
│   ├── components/
│   │   └── AdvancedCounter.tsx   ← The main counter component (all the logic lives here)
│   ├── App.tsx                   ← Root component, renders <AdvancedCounter />
│   ├── App.css                   ← App-level styles
│   ├── main.tsx                  ← Entry point — mounts the React app to the DOM
│   └── index.css                 ← Global styles
├── index.html                    ← The single HTML page Vite serves
├── package.json                  ← Project dependencies and scripts
├── tsconfig.json                 ← TypeScript configuration
└── vite.config.ts                ← Vite configuration
```

---

## 🔑 Key Concepts Demonstrated

### `useState` — Managing State
```tsx
const [count, setCount] = useState<number>(0);
const [history, setHistory] = useState<number[]>([]);
const [step, setStep] = useState<number>(1);
const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
```
- `useState<number>(0)` declares a state variable `count` that starts at `0`
- The `<number>` syntax is **TypeScript** telling the compiler what type of value to expect
- `"idle" | "saving" | "saved"` is a **union type** — the status can only ever be one of those three strings

### `useEffect` — Side Effects
```tsx
// Effect 1: Auto-save count to localStorage after 300ms
useEffect(() => {
  const timeoutId = window.setTimeout(() => {
    localStorage.setItem("count", String(count));
    setSaveStatus("saved");
  }, 300);

  return () => {
    window.clearTimeout(timeoutId); // Cleanup: cancel the timeout if count changes quickly
  };
}, [count]); // ← Runs every time `count` changes
```
- The **dependency array** `[count]` tells React: *"Only re-run this effect when `count` changes"*
- The **return function** (called the cleanup function) cancels the previous timer before starting a new one — this prevents saving stale values

```tsx
// Effect 2: Listen for keyboard arrow key presses
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") { /* increment */ }
    if (event.key === "ArrowDown") { /* decrement */ }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown); // Cleanup: remove the listener
  };
}, [count, step]); // ← Runs when either `count` or `step` changes
```
- Event listeners must be **cleaned up** when the component re-renders or unmounts — otherwise you'd get memory leaks and duplicate listeners

### TypeScript Event Typing
```tsx
const handleStepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const nextStep = Number(event.target.value);
  ...
};
```
- `React.ChangeEvent<HTMLInputElement>` tells TypeScript exactly what kind of event this handler receives
- This gives you autocomplete and prevents bugs from passing the wrong event type

---

## 🚀 How to Run the Project

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)

You can check by running:
```bash
node -v
npm -v
```

---

### Step 1 — Navigate to the Project Folder

Open your terminal and run:
```bash
cd /path/to/PerScholasTS/mod416/lab1-react-counter/advanced-counter
```

> 💡 **Tip:** In VS Code, you can right-click the `advanced-counter` folder and select *"Open in Integrated Terminal"* to skip this step.

---

### Step 2 — Install Dependencies

```bash
npm install
```

This reads the `package.json` file and downloads all required packages (React, TypeScript, Vite, etc.) into a `node_modules/` folder.

> ⚠️ You only need to run this **once**, or again after pulling new changes that update `package.json`.

---

### Step 3 — Start the Development Server

```bash
npm run dev
```

You'll see output like:
```
  VITE v8.x.x  ready in Xms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and go to **http://localhost:5173** to see the app.

---

### Step 4 — Make Changes & See Live Updates

Vite supports **Hot Module Replacement (HMR)** — any change you save in your editor will automatically update the browser without needing a full page refresh.

---

### Step 5 — Stop the Server

When you're done, press `Ctrl + C` in the terminal to stop the dev server.

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local development server |
| `npm run build` | Compile TypeScript and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code quality issues |

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [React](https://react.dev/) | ^19 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0 | Static type checking |
| [Vite](https://vite.dev/) | ^8 | Fast build tool & dev server |

---

## 💡 Things to Try

Once the app is running, experiment with these to deepen your understanding:

1. **Change the step** to `10` and click Increment — notice how the history updates
2. **Use the arrow keys** on your keyboard to change the count
3. **Open browser DevTools** → Application → Local Storage → see your count being saved in real time
4. **Click Reset** and watch both the count and history clear
5. **Read `AdvancedCounter.tsx`** and trace each button click through the code

---

*Happy coding! 🎉*
