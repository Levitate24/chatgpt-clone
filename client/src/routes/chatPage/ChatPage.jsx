import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  return (
    <div className="chat-page">
      <div className="wrapper">
        <div className="chat">
          <div className="message">How can I help you?</div>
          <div className="message user">Help me build a rocket!</div>
          <div className="message">How can I help you?</div>
          <div className="message user">Help me build a rocket!</div>
          <div className="message">How can I help you?</div>
          <div className="message user">Help me build a rocket!</div>
          <div className="message">How can I help you?</div>
          <div className="message user">Help me build a rocket!</div>
          <div className="message">How can I help you?</div>
          <div className="message user">Help me build a rocket!</div>
          <div className="message">How can I help you?</div>
          <div className="message user">Help me build a rocket!</div>
          <div className="message">How can I help you?</div>
          <div className="message user">Help me build a rocket!</div>
          <div className="message">How can I help you?</div>
          <div className="message user">Help me build a rocket!</div>
          <div className="message">How can I help you?</div>
          <div className="message user">Help me build a rocket!</div>
          <div className="message">How can I help you?</div>
          <div className="message user">Help me build a rocket!</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};
export default ChatPage;
