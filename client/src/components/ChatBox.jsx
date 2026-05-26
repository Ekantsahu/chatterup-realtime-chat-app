import { useEffect, useRef, useState } from "react";
import socket from "../socket";
import notificationSound from "../assets/notification_sound.mp3";
import Message from "./Message";

function ChatBox({ username }) {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typingUser, setTypingUser] = useState("");
const audioRef = useRef(
  new Audio(notificationSound)
);

  const messagesEndRef = useRef(null);

  // AUTO SCROLL
  const scrollToBottom = () => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  };

  // SOCKET EVENTS
  useEffect(() => {

    socket.on("chatHistory", (data) => {

      setMessages(data);

    });

    socket.on("message", (data) => {

      const currentUser =
        localStorage.getItem("username");

      if (data.username !== currentUser) {

       audioRef.current.play();

      }

      setMessages((prev) => [...prev, data]);

    });

    socket.on("typing", (user) => {

      setTypingUser(user);

    });

    socket.on("stopTyping", () => {

      setTypingUser("");

    });

    socket.on("notification", (data) => {

      setMessages((prev) => [
        ...prev,
        {
          notification: true,
          message: data.message,
        },
      ]);

    });

    return () => {

      socket.off("chatHistory");
      socket.off("message");
      socket.off("typing");
      socket.off("stopTyping");
      socket.off("notification");

    };

  }, []);

  // AUTO SCROLL WHEN MESSAGE CHANGES
  useEffect(() => {

    scrollToBottom();

  }, [messages]);

  // SEND MESSAGE
  const sendMessage = () => {

    if (!message.trim()) return;

    const messageData = {

      username,

      avatar:
        `https://api.dicebear.com/7.x/bottts/svg?seed=${username}`,

      message,

     time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    };

    socket.emit("sendMessage", messageData);

    socket.emit("stopTyping");

    setMessage("");
  };

  // HANDLE TYPING
  const handleTyping = (e) => {

    setMessage(e.target.value);

    if (e.target.value) {

      socket.emit("typing", username);

    } else {

      socket.emit("stopTyping");

    }
  };

  return (
    <div className="chat-box">

      <div className="chat-header">
        Welcome {username}
      </div>

      <div className="messages">

        {
          messages.length === 0 && (
            <div className="notification">
              No messages yet
            </div>
          )
        }
        {
  messages.map((msg, index) => {

    if (msg.notification) {

      return (
        <div
          className="notification"
          key={index}
        >
          {msg.message}
        </div>
      );
    }

    return (
      <Message
        key={msg._id || index}
        msg={msg}
      />
    );
  })
}

        <div ref={messagesEndRef}></div>

      </div>

      {
        typingUser && (
          <div className="typing-text">
            {typingUser} typing...
          </div>
        )
      }

      <div className="message-input">

        <input
          type="text"
          placeholder="Type message..."
          value={message}
          onChange={handleTyping}
          onBlur={() => socket.emit("stopTyping")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
                sendMessage();
            }
            }}
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatBox;