import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./join.css";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join-container">
      <div className="join-inner-container">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Enter your name"
            className="join-input"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Enter room name"
            className="join-input mt-20"
            type="text"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>
        <NavLink to={`/chat?name=${name}&room=${room}`}>
          <button
            className="button mt-20"
            type="submit"
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          >
            Enter
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Join;
