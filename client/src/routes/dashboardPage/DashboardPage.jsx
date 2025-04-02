import { useAuth } from "@clerk/clerk-react";
import "./dashboardPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashboardPage = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="dashboard-page">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo" />
          <h1 className="title">Lev AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" />
            <span>Create New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" />
            <span>Help Me With My Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input
            className="chat-input"
            type="text"
            placeholder="Ask Me Anything..."
          />
          <button className="chat-button">
            <img src="/arrow.png" alt="send" className="send" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default DashboardPage;
