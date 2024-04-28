import { useMyContext } from '@/Contexts/MyContext';
import React, { useState } from 'react'
import { CgProfile, CgShoppingCart, CgShoppingBag, CgTemplate, CgLogOut } from "react-icons/cg";

function Nav() {
  const [show, setShow] = useState(false)
  const { logOut, session } = useMyContext()
  const handleLogOut = () => {
    logOut()
  }
  const profileOptions = [
    {
      name: 'Profile',
      icon: <CgProfile />
    },
    {
      name: 'Cart',
      icon: <CgShoppingCart />
    },
    {
      name: 'Order',
      icon: <CgShoppingBag />
    },
    {
      name: 'Preferences',
      icon: < CgTemplate />
    },
    {
      name: 'Logout',
      icon: <CgLogOut />,
      func: handleLogOut
    },
  ]
  return (
    <div>
      <div className='w-fit relative ' onClick={() => setShow(!show)}>
        <div className='w-9 h-9 rounded-full bg-orange-600 cursor-pointer flex items-center justify-center'>
          {
            show ? <CgProfile className='text-2xl text-black' /> : <CgProfile className='text-2xl text-white' />
          }
        </div>
        <div className={` transition-all duration-700 ${show ? ' block translate-y-6 ' : 'hidden'}`}>

          <ul className=' min-w-max absolute right-0 mt-2 bg-gray-200 divide-y divide-gray-100 rounded-lg shadow overflow-hidden '>

            {
              profileOptions.map((item, index) => (
                <li
                  key={index}
                  onClick={item?.func}
                  className='flex gap-3 items-center px-4 py-2 text-gray-800 hover:bg-orange-500 cursor-pointer'>
                  {item.icon}
                  {item.name}
                </li>
              ))
            }

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav