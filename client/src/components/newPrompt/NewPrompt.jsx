import { useEffect, useRef } from "react";
import "./newPrompt.css";

const NewPrompt = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      {/* Add New Chat Here */}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        <label htmlFor="file">
          <img
            src="/attachment.png"
            alt="attachment"
            className="attachmentIcon"
          />
        </label>
        <input type="file" id="file" multiple={false} hidden />
        <input
          type="text"
          placeholder="Ask anything..."
          className="chatInput"
        />
        <button>
          <img src="/arrow.png" alt="submit" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
