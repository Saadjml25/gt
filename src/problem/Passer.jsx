import React from 'react'
import Login from '../scenes/login/Login'
import Sidebar from '../scenes/global/Sidebar'

const Passer = ({ username }) => {
  console.log('heloo',username)
  return <Sidebar username={username} />;
};

export default Passer