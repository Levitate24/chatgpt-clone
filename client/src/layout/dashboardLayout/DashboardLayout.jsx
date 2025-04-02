import { Outlet } from "react-router-dom";
import "./dashboardLayout.css";
import ChatList from "../../components/chatList/ChatList";

const RootLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="menu">
        <ChatList />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
