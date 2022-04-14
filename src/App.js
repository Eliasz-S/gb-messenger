import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { ChatListContainer } from './components/ChatList/ChatListContainer';
import { Header } from './components/Header/Header';
import { Home } from './screens/Home/Home';
import { Profile } from './screens/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<ChatListContainer />}>
          <Route path=':id' element={<Chat />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
