import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { AUTHORS } from "../../components/utils/constants";
import { addMessageWithReply } from "../../store/messages/actions";
import { selectMessagesByChatId } from "../../store/messages/selectors";

export function Chat() {
  const { id } = useParams();

  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  const sendMessage = (text) => {
    dispatch(
      addMessageWithReply(
        {
          author: AUTHORS.human,
          text,
          id: `msg-${Date.now()}`,
        }, 
        id
      )
    ); 
  };

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