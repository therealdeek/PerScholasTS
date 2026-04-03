import React from "react";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "40px 16px",
      }}
    >
      <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
    </div>
  );
}

export default App;
