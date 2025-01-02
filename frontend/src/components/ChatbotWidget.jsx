import React, { useState } from "react";

const ChatbotWidget = () => {
  const [isChatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!isChatbotVisible);
  };

  return (
    <div>
      {/* Chatbot Iframe */}
      {isChatbotVisible && (
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/YmMH8opFUQlRxJlfzJBC1"
          width="100%"
          style={{
            height: "100%",
            minHeight: "700px",
            position: "fixed",
            bottom: "70px",
            right: "20px",
            zIndex: 1000,
            border: "none",
          }}
          frameBorder="0"
        ></iframe>
      )}

     
    </div>
  );
};

export default ChatbotWidget;
