import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chat-list">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new chat</Link>
      <Link to="/">Explore Lev AI</Link>
      <Link to="/">Contact Us</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="chat-list-item">
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="upgrade logo" className="sidebar-logo" />
        <div className="upgrade-text">
          <span>Upgrade to Lev AI Pro</span>
          <span>Get access to all features and more...</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
