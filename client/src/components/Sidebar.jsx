function Sidebar({ users }) {

  return (
    <div className="sidebar">

      <h2>Online Users</h2>

      <div className="online-count">
        {users.length} users online
      </div>

      {
        users.map((user, index) => (

          <div className="user-item" key={index}>

            🟢 {user.username}

          </div>
        ))
      }

    </div>
  );
}

export default Sidebar;