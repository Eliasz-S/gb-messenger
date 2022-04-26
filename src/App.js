import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { ChatListContainer } from './components/ChatList/ChatListContainer';
import { Header } from './components/Header/Header';
import { Home } from './screens/Home/Home';
import { Profile } from './screens/Profile/Profile';
import { Articles } from './screens/Articles/Articles';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';

function App() {
  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  };

  const handleLogout = () => {
    setAuthed(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleLogin();
      } else {
        handleLogout();
      }
    });

    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<PublicRoute authed={authed} />} >
          <Route path="" element={<Home onAuth={handleLogin} />} />
          <Route path="signup" element={<Home onAuth={handleLogin} isSignUp />} /> 
        </Route>
        
        <Route path="/chat" element={<PrivateRoute authed={authed} />} >
          <Route path="" element={<ChatListContainer />}>
            <Route path=":id" element={<Chat />} />
          </Route>
        </Route>
        
        <Route path="/profile" element={<PrivateRoute authed={authed} />} >
          <Route path="" element={<Profile onLogout={handleLogout} />} />
        </Route>

        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
