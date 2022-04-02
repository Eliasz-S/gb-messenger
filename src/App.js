// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { Form } from './components/Form/Form';
import { AUTHORS } from './components/utils/constants';
import { MessageList } from './components/MessageList/MessageList';
import { ChatList } from './components/ChatList/ChatList';

const messageList = [];
const chatList = [
  {
    id: "e4tsancmsl",
    name: "Richard Adams",
  },
  {
    id: "e4tsancmsq",
    name: "Jenna Richards",
  },
  {
    id: "e4tsancmsy",
    name: "Maria Antonova",
  },
  {
    id: "e4tsancmed",
    name: "Vasiliy Detochkin",
  },
];

function App() {
  const [messages, setMessages] = useState(messageList);

  const timeout = useRef;

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
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

  return (
    <React.Fragment>
      <div className="App">
        <ChatList chatList={chatList} />
        <div className="App-chat-section">
          <MessageList messages={messages} />
          <Form onSubmit={sendMessage} />
        </div>
      </div>
    </React.Fragment>
  );
}

// export class AppClass extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     )
//   }
// }

export default App;
