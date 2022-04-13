import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { ChatList } from './components/ChatList/ChatList';
import { isLinkActive } from './components/utils/styles';
import { Home } from './screens/Home/Home';
import { Profile } from './screens/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <header className='App-header'>
        <ul>
          <li>
            <NavLink 
              to="/"
              style={isLinkActive}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/chat"
              style={isLinkActive}
            >
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile"
              style={isLinkActive}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </header>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<ChatList />}>
          <Route path=':id' element={<Chat />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
