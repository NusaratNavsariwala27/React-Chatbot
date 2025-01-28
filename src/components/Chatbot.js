import config from "./config.jsx";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css"; // Style for the chatbot

// Chatbot component
const ChatbotComponent = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotComponent;
