import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/login'
import Chat from './pages/Chat/chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </>
  )
}

export default App


