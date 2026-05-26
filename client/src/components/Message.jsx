function Message({ msg }) {

  const currentUser = localStorage.getItem("username");

  const isOwnMessage =
    currentUser === msg.username;

  return (

    <div
      className={
        isOwnMessage
          ? "message-wrapper own"
          : "message-wrapper"
      }
    >

      <div className="message-card">

        <img
         src={
        msg.avatar ||
        "https://via.placeholder.com/50"
        }
          alt="avatar"
          className="avatar"
        />

        <div>

          <div className="message-top">

            <strong>{msg.username}</strong>

            <span>{msg.time}</span>

          </div>

          <p>{msg.message}</p>

        </div>

      </div>

    </div>
  );
}

export default Message;