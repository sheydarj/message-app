"use client";
import React from 'react';
import styles from '../styles/MessageBubble.module.css'; 

const MessageBubble = ({ message }) => {
  return (
    <div className={message.isSender ? styles.senderBubble : styles.receiverBubble}>
      <div className={styles.messageContent}>
        <span>{message.senderName}</span>
        <p>{message.text}</p>
        <span className={styles.timestamp}>{message.timestamp}</span>
      </div>
    </div>
  );
};

export default MessageBubble;
