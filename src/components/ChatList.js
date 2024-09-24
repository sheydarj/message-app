"use client";
import React, { useState } from 'react';
import chats from '../mock/chats';
import ChatWindow from './ChatWindow'; 

const ChatList = () => {
  const [selectedChat, setSelectedChat] = useState(null); 
  console.log(chats);
  return (
    <div>
      <h2>Chats</h2>
      <ul>
      
        {chats.map((chat, index) => (
            
            chat ? (
               

          <li key={index} onClick={() => setSelectedChat(chat)}>
            {chat.name}
          </li>
            ) : null
        ))}
      </ul>

      
      {selectedChat && <ChatWindow chat={selectedChat} />}
    </div>
  );
};

export default ChatList;
