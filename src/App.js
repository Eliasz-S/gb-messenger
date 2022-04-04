// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat';
import { ChatList } from './components/ChatList/ChatList';

const Home = () => <h4>Home page</h4>;
const Profile = () => <h4>This is your profile page</h4>

function App() {
  return (
    <BrowserRouter>
      <header className='App-header'>
        <ul>
          <li>
            <NavLink 
              to="/"
              style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/chat"
              style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            >
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile"
              style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<ChatList /> }>
          <Route path=':id' element={<Chat />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
