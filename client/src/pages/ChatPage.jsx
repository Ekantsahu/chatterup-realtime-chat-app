import { useEffect, useState } from "react";
import socket from "../socket";

import ChatBox from "../components/ChatBox";
import Sidebar from "../components/Sidebar";

function ChatPage({ username }) {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    // USER JOIN EVENT
    socket.emit("join", username);

    // RECEIVE ONLINE USERS
    socket.on("onlineUsers", (data) => {

      setUsers(data);

    });

    return () => {

      socket.off("onlineUsers");

    };

  }, []);

  return (
    <div className="chat-page">

      <Sidebar users={users} />

      <ChatBox username={username} />

    </div>
  );
}

export default ChatPage;