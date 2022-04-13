import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { AUTHORS } from "../../components/utils/constants";
import { addMessage } from "../../store/messages/actions";
import { selectMessagesByChatId } from "../../store/messages/selectors";

export function Chat() {
  const { id } = useParams();

  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();
  const timeout = useRef();

  const sendMessage = (text) => {
    dispatch(
      addMessage(
        {
          author: AUTHORS.human,
          text,
          id: `msg-${Date.now()}`,
        }, 
        id
      )
    ); 
  };

  useEffect(() => {
    const lastMessage = messages?.[messages?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        dispatch(
          addMessage(
            {
              id: `msg-${Date.now()}`,
              text: "Hello! I'm your virtual assistant. Nice to meet you.",
              author: AUTHORS.robot, 
            }, 
            id
          )
        )
      }, 1500); 
    }

    return () => {
      clearTimeout(timeout.current);
    };

  }, [messages]);

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