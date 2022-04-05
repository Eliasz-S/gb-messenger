import React, { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { AUTHORS } from "../../components/utils/constants";

const initMessages = {
  chat1: [],
  chat2: [],
  chat3: [],
  chat4: [],
}


export function Chat() {
    const { id } = useParams();

    const [messages, setMessages] = useState(initMessages);
  
    const timeout = useRef();
  
    const addMessage = (newMessage) => {
      setMessages({...messages, [id]: [...messages[id], newMessage]});
    };
  
    const sendMessage = (text) => {
      addMessage({
        author: AUTHORS.human,
        text,
        id: `msg-${Date.now()}`,
      });
    };
  
    useEffect(() => {
      const lastMessage = messages[id]?.[messages[id]?.length - 1];
      if (lastMessage?.author === AUTHORS.human) {
        timeout.current = setTimeout(() => {
          addMessage({
            id: `msg-${Date.now()}`,
            text: "Hello! I'm your virtual assistant. Nice to meet you.",
            author: AUTHORS.robot, 
          })
        }, 1500); 
      }
  
      return () => {
        clearTimeout(timeout.current);
      };
  
    }, [messages]);

    if (!messages[id]) {
      return (
        <Navigate to="/chat" replace />
      );
    };
  
    return (
      <React.Fragment>
        <div className="App">
          <div className="App-chat-section">
            <MessageList messages={messages[id]} />
            <Form onSubmit={sendMessage} />
          </div>
        </div>
      </React.Fragment>
    );
  }