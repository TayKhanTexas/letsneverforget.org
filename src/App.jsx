import React, { useState } from 'react';
import './App.css';
import SarahEverard from './victims/SarahEverard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Let's Never Forget</h1>
      <h2>Keeping Alive the Memory of Women Killed by Men</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Victims since 1st Jan 2024: {count}
        </button>
      </div>
      <div>
        <SarahEverard />
      </div>
      <p className="dedicated-to">
        This is dedicated to the women killed in the UK where a man has been convicted or charged as the primary perpetrator in the case.
      </p>
    </>
  );
}

export default App;
