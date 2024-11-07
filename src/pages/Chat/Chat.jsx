import React from 'react'
import './Chat.css'
import LeftSideBar from '../../components/LeftSideBar/LeftSidebar'
import ChatBox from '../../components/ChatBox/ChatBox'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
const chat = () => {
  return (
    <div className='chat'>
          <div className="chat-container">
              <LeftSideBar />
              <ChatBox />
              <RightSideBar />
              
        </div>
    </div>
  )
}

export default chat
