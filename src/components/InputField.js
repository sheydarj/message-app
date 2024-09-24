"use client";
import React, { useState } from 'react';
import styles from '../styles/InputField.module.css'; 

const InputField = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage(''); 
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type a message..." 
        className={styles.inputField}
      />
      <button 
      onClick={handleSend}
      className={styles.sendButton}
      >Send</button>
    </div>
  );
};

export default InputField;
