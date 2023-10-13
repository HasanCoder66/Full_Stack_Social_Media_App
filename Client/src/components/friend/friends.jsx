import "./friends.css";

export function Friend({ user }) {
  return (
    <li className="sideBarFriend">
      <img
        src={user.profilePicture}
        alt="Friend Image"
        className="sideBarFriendImg"
      />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
}

