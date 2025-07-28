import React from 'react'
import claudeLogo from "./assets/chef-claude-icon.png"

const Header = () => {
  return (
    <header className='header'>
      <img src={claudeLogo} width="50px" alt="" />
      <span>Chef Claude</span>
    </header>
  )
}

export default Header
