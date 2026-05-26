I see the issue! The problem is that you're nesting a code block inside a markdown code block. Here's the **correct raw text** you should copy and paste directly into your README.md file (don't wrap it in another markdown block):

```markdown
# ChatterUp 💬

A real-time chat application built using **Node.js**, **Express.js**, **Socket.io**, **MongoDB**, and **React**.  
ChatterUp enables users to communicate instantly with live messaging, typing indicators, online user tracking, and chat history storage.

---

## 🚀 Features

- 🔴 Real-time messaging using Socket.io
- 👥 Online users panel
- ✍️ Typing indicator
- 💾 Chat history stored in MongoDB
- 🔔 Join/leave notifications
- 🔊 Audio notifications for new messages
- 😀 User avatars using DiceBear API
- 📱 Fully responsive UI
- ⚡ Auto-scroll to latest message
- 🕒 Message timestamps
- 🧩 Modular MVC backend architecture
- 📦 ES6 Modules support

---

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS3
- Socket.io Client
- React Icons

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB
- Mongoose

---

## 📂 Project Structure

```text
ChatterUp/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── socket.js
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── sockets/
│   │   ├── routes/
│   │   └── app.js
│   │
│   ├── server.js
│   ├── .env
│   └── package.json
```

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone YOUR_GITHUB_REPO_URL
```

### 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

### 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🗄️ MongoDB Setup

### Local MongoDB

Create `.env` file inside `server/`

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/chatterup
```

### MongoDB Atlas (Recommended for Deployment)

```env
PORT=3000
MONGO_URI=YOUR_MONGODB_ATLAS_URL
```

---

## ▶️ Run Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## 🌐 Application URLs

| Service | URL |
|---------|-----|
| Frontend | `http://localhost:5173` |
| Backend | `http://localhost:3000` |

---

## 🔌 Socket Events

### Client Events

```
join
sendMessage
typing
stopTyping
disconnect
```

### Server Events

```
chatHistory
message
onlineUsers
notification
typing
stopTyping
```

---

## 📸 Screenshots

### Desktop View
- Real-time chat interface
- Online users sidebar
- Typing indicator
- Responsive layout

### Mobile View
- Optimized responsive design
- Mobile-friendly chat layout

![Desktop View](https://github.com/user-attachments/assets/cfe25b58-0eb8-463f-a290-696c2ebcabdf)

![Mobile View](https://github.com/user-attachments/assets/b9fe5bde-a2cc-4abd-b073-a757d2761b46)

---

## ✨ Future Improvements

- 🌙 Dark mode
- 😀 Emoji picker
- 🖼️ Image sharing
- 🔐 Authentication
- 💬 Private chats
- 📁 File sharing

---

## 👨‍💻 Author

**Ekant Kumar Sahu**
- Learning MERN Stack
- Passionate about Real-Time Applications

---

## 📜 License

This project is created for educational and learning purposes.
```
