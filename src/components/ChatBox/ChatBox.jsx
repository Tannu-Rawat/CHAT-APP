import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'
import 'C:/Users/vikra/vite-project/src/index.css'
const ChatBox = () => {
  return (
      <div className='chat-box'>
          <div className="chat-user">
              <img src={assets.profile_img} alt="" />
              <p>Richard Sanford <img src={assets.green_dot} className='dot' alt="" /></p>
              <img src={assets.help_icon} className='help' />
          </div>
          <div className="chat-input">
              <input type='text' placeholder='Send a message' />
              <input type="file" id='image' accept='image/png, image/jpeg' hidden />
              <label htmlFor='image'>
                  <img src={assets.gallery_icon} alt="" />
              </label>
              <img src={assets.send_button} alt="" />
        </div>
    </div>
  )
}

export default ChatBox
