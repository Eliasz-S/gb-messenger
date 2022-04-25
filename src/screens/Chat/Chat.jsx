import { onValue, push } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { auth, getMessagesListRefById, getMessagesRefById } from "../../services/firebase";
export function Chat() {

  const { id } = useParams();

  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    push(getMessagesListRefById(id), {
      author: auth.currentUser.email,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    const unsubscribe = onValue(getMessagesRefById(id), (snapshot) => {
      console.log(snapshot.val());
      const val = snapshot.val();

      if(!val?.exists) {
        setMessages(null);
      } else {
        console.log(val.messageList);
        setMessages(Object.values(val.messageList || {}));
      }
    });

    return unsubscribe;
  }, [id]);

  if (!messages) {
    return (
      <Navigate to="/chat" replace />
    );
  };

  return (
    <React.Fragment>
      <div className="App-chat-section">
        <MessageList messages={messages} />
        <Form onSubmit={sendMessage} />
      </div>
    </React.Fragment>
  );

}