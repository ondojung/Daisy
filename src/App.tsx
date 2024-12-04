import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SearchRoom from './pages/SearchRoom'
import ChatLogs from './pages/ChatLogs'
import './App.css'
import {Socket} from './util/socket'
const socket = new Socket()

function App(){
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/chat_logs" element={<ChatLogs/>}/>
          <Route path="/search_room" element={<SearchRoom/>}/>
        </Routes>
    </BrowserRouter>
    )
};

export default App