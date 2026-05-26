import {
  saveMessage,
  getMessages,
} from "../controllers/messageController.js";

const users = [];

const chatSocket = (io) => {

  io.on("connection", async (socket) => {

    console.log("User Connected:", socket.id);

    // SEND OLD CHAT HISTORY
    socket.emit("chatHistory", await getMessages());
    // USER JOIN
    socket.on("join", (username) => {

        const usernameExists = users.find(
        (user) => user.username === username
        );

        if (usernameExists) {
        return;
        }

      const existingUser = users.find(
        (user) => user.id === socket.id
      );

      if (!existingUser) {

        users.push({
          id: socket.id,
          username,
        });

      }

      io.emit("onlineUsers", users);

      io.emit("notification", {
        message: `${username} joined the chat`,
      });

    });

    // RECEIVE MESSAGE
    socket.on("sendMessage", async (data) => {

      const savedMessage = await saveMessage(data);

      io.emit("message", savedMessage);

    });

    // TYPING
    socket.on("typing", (username) => {

      socket.broadcast.emit("typing", username);

    });

    // STOP TYPING
    socket.on("stopTyping", () => {

      socket.broadcast.emit("stopTyping");

    });

    // DISCONNECT
    socket.on("disconnect", () => {

      const user = users.find(
        (u) => u.id === socket.id
      );

      if (user) {

        io.emit("notification", {
          message: `${user.username} left the chat`,
        });

        const index = users.indexOf(user);

        users.splice(index, 1);

        io.emit("onlineUsers", users);
      }

      console.log("User Disconnected");

    });

  });

};

export default chatSocket;