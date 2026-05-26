import { useState} from "react";
import Join from "./components/Join";
import ChatPage from "./pages/ChatPage";

function App() {

  const [username, setUsername] = useState("");

  return (
    <>
      {
        username
          ? <ChatPage username={username} />
          : <Join setUsername={setUsername} />
      }
    </>
  );
}


export default App;