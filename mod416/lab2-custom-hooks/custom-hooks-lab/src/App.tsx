import { PaginationDemo } from "./components/PaginationDemo";
import { DebounceSearchDemo } from "./components/DebounceSearchDemo";

function App() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Custom Hooks Implementation</h1>
      <PaginationDemo />
      <hr style={{ margin: "24px 0" }} />
      <DebounceSearchDemo />
    </main>
  );
}

export default App;
