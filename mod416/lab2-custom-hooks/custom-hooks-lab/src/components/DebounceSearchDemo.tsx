import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export function DebounceSearchDemo() {
  const [query, setQuery] = useState("");
  const [delay, setDelay] = useState(500);
  const debouncedQuery = useDebounce(query, delay);

  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      return;
    }

    console.log(`Searching for: ${debouncedQuery}`);
  }, [debouncedQuery]);

  return (
    <section>
      <h2>Debounce Search Demo</h2>

      <div>
        <label htmlFor="search-input">Search:</label>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type to search..."
        />
      </div>

      <div>
        <label htmlFor="delay-input">Delay (ms):</label>
        <input
          id="delay-input"
          type="number"
          min={0}
          step={100}
          value={delay}
          onChange={(event) => setDelay(Number(event.target.value))}
        />
      </div>

      <p>Current Input: {query}</p>
      <p>Debounced Value: {debouncedQuery}</p>

      <div>
        <h3>Simulated Search Result</h3>
        {debouncedQuery.trim() === "" ? (
          <p>Type to see results.</p>
        ) : (
          <p>Searching for: {debouncedQuery}</p>
        )}
      </div>
    </section>
  );
}
