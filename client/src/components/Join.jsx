import { useState } from "react";

function Join({ setUsername }) {

  const [name, setName] = useState("");

  const handleJoin = () => {

    if (!name.trim()) return;

    localStorage.setItem("username", name);

    setUsername(name);
};

  return (
    <div className="join-container">

      <div className="join-box">

        <h1>ChatterUp</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleJoin}>
          Join Chat
        </button>

      </div>

    </div>
  );
}

export default Join;