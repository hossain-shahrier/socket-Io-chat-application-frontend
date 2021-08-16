import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPONT = "http://localhost:5000";
  let socket;
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPONT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPONT, location.search]);
  return <div></div>;
};

export default Chat;
