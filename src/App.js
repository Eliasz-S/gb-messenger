// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';

const name = "me";
const botName = "bot";

const messageList = [];

function App() {
  const [messages, setMessages] = useState(messageList);

  useEffect(() => {

    let timeoutId;
    
    if (messages.length !== 0 && messages[messages.length - 1].author !== botName) {
      timeoutId = setTimeout(() => {
        setMessages([...messages, { 
          id: messages.length,
          text: "Hello! I'm your virtual assistant. Nice to meet you.",
          author: botName, 
        }]);
      }, 1500); 
    }

    return () => {
      if (timeoutId) {
        // console.log(timeoutId);
        clearTimeout(timeoutId);
      }
    };

  }, [messages]);

  const addMessage = (newText) => {
    setMessages([...messages, { id: messages.length, text: newText, author: name }]);
  };

  return (
    <React.Fragment>
      <div className="App">
        {messages.map((message) => 
          <Message key={message.id} text={message.text} author={message.author} />
        )}
        <Form onSubmit={addMessage} />
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
