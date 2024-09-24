
import React from 'react';
import MessageBubble from './MessageBubble';
import styles from '../styles/ChatWindow.module.css';
import InputField from './InputField'; 

const ChatWindow = ({ chat }) => {
    
    

    const handleSendMessage = (message) => {
      };
    return (
    <div>
    <div className={styles.chatWindow}>
      {chat.messages.map((message, index) => (
        <MessageBubble key={index} message={message} />
      ))}
    </div>
   
    <InputField onSendMessage={handleSendMessage} /> 
  </div>
  );
  
};

export default ChatWindow;

