// About: React function components using useState and useEffect hooks.
// Run: Add as the App component in a React project (Vite/CRA) and start the dev server.

import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ marginBottom: "16px" }}>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function UserCard(props) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "6px" }}
    >
      <h3>{props.name}</h3>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default function App() {
  const [showCard, setShowCard] = useState(true);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>React Components and Hooks</h1>

      <Counter />

      <button
        onClick={() => setShowCard(!showCard)}
        style={{ marginBottom: "12px" }}
      >
        Toggle User Card
      </button>

      {showCard && <UserCard name="Asha" course="Web Development" />}
    </div>
  );
}
