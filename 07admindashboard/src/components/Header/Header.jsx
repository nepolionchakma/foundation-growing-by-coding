import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Nav from './Nav/Nav'

function Header() {
  return (
    <div className='flex gap-4 h-[9vh] items-center shadow-md p-9 justify-between'>
      <Logo />
      <Search />
      <Nav />
    </div>
  )
}

export default Header