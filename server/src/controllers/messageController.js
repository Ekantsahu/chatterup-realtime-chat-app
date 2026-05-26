import Message from "../models/Message.js";

export const saveMessage = async (data) => {
  try {

    const newMessage = new Message(data);

    await newMessage.save();

    return newMessage;

  } catch (error) {

    console.log("Save Message Error:", error.message);
  }
};

export const getMessages = async () => {
  try {

    const messages = await Message.find().sort({ createdAt: 1 });

    return messages;

  } catch (error) {

    console.log("Get Message Error:", error.message);
  }
};