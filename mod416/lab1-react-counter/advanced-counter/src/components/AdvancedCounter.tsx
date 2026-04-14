import { useEffect, useState } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);
  const [step, setStep] = useState<number>(1);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">(
    "idle",
  );

  const handleStepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextStep = Number(event.target.value);

    if (Number.isNaN(nextStep)) {
      return;
    }

    setStep(nextStep);
  };

  const applyIncrement = () => {
    const nextCount = count + step;
    setCount(nextCount);
    setHistory((prevHistory) => [...prevHistory, nextCount]);
    setSaveStatus("saving");
  };

  const applyDecrement = () => {
    const nextCount = count - step;
    setCount(nextCount);
    setHistory((prevHistory) => [...prevHistory, nextCount]);
    setSaveStatus("saving");
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
    setSaveStatus("saving");
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      localStorage.setItem("count", String(count));
      setSaveStatus("saved");
    }, 300);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [count]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        const nextCount = count + step;
        setCount(nextCount);
        setHistory((prevHistory) => [...prevHistory, nextCount]);
        setSaveStatus("saving");
      }

      if (event.key === "ArrowDown") {
        const nextCount = count - step;
        setCount(nextCount);
        setHistory((prevHistory) => [...prevHistory, nextCount]);
        setSaveStatus("saving");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [count, step]);

  return (
    <div>
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      <p>Save status: {saveStatus}</p>

      <label htmlFor="step-input">Step</label>
      <input
        id="step-input"
        type="number"
        value={step}
        onChange={handleStepChange}
      />

      <p>Use ArrowUp to increment and ArrowDown to decrement.</p>

      <button onClick={applyDecrement}>Decrement</button>
      <button onClick={applyIncrement}>Increment</button>
      <button onClick={reset}>Reset</button>

      <h3>Count History</h3>
      {history.length === 0 ? (
        <p>No history yet.</p>
      ) : (
        <p>Count history: {history.join(", ")}</p>
      )}
    </div>
  );
}

export default AdvancedCounter;
