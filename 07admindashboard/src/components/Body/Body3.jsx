import { useEffect, useState } from "react"
import {
  Activity,
  LayoutDashboard,
  Clock1,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
  ChevronRight,
  CrossIcon,
  MenuSquareIcon
} from 'lucide-react';
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import {
  CgChevronLeft,
  CgHomeAlt,
  CgAlarm,
  CgLoadbarSound,
  CgClose,
  CgArrowsExchangeAlt,
  CgDanger,
  CgProfile,
  CgChevronRight
} from "react-icons/cg";
import { useMyContext } from "@/Contexts/MyContext";

function Body3() {
  // const location = useLocation()
  // const urlSlice = location.pathname.slice(1)
  // console.log(urlSlice)
  // useEffect(() => {
  //   const isActiveData = JSON.parse(localStorage.getItem('isActive'))
  //   setActiveDataIndex(isActiveData)
  // }, [])
  let id = JSON.parse(localStorage.getItem('isExpanded'))
  let idIsActive = JSON.parse(localStorage.getItem('isActive'))
  if (id == null) id = true
  if (idIsActive == null) idIsActive = 0
  // const [activeDataIndex, setActiveDataIndex] = useState()
  // const indexNumber = activeDataIndex
  const [isActive, setIsActive] = useState(idIsActive)
  const [isExpanded, setIsExpanded] = useState(id)
  const { session } = useMyContext()

  const navLinks = [
    {
      name: 'Dashboard',
      icon: CgHomeAlt,
      link: '/'
    },
    {
      name: 'Add_Post',
      icon: CgProfile,
      link: '/AddPost'
    },
    {
      name: 'Activity',
      icon: CgAlarm,
      link: '/Activity'
    },
    {
      name: 'Analytics',
      icon: CgLoadbarSound,
      link: '/Analytics'
    },
    {
      name: 'Transactions',
      icon: CgArrowsExchangeAlt,
      link: '/Transactions'
    },
    {
      name: 'Help_Center',
      icon: CgDanger,
      link: '/Help'
    },

  ]
  const handleIndexClick = (index) => {
    setIsActive(index)
    localStorage.setItem('isActive', JSON.stringify(index))
  }
  const handleExpandedClick = (Click) => {
    setIsExpanded(Click)
    localStorage.setItem('isExpanded', JSON.stringify(Click))
  }

  return (
    <div className="flex ">
      {/* -------------------------- */}
      <div className={` transition-all duration-700 relative ${isExpanded ? 'w-[17%] md:w-[25%] lg:w-[20%]  ' : ' md:w-[12%] lg:w-[9%] xl:w-[6%]'}`}>
        <aside className="h-[90vh]">
          <nav className={`h-full flex flex-col border-r `}>
            <div>
              <div className="flex gap-4 p-3 items-center justify-between">
                <img src="https://www.tpisoftware.com/tpu/File/html/202009/20200929151429/images/20200926171128.png" alt="" className="w-9 h-9" />
                <button
                  onClick={() => handleExpandedClick(!isExpanded)}
                  className="bg-orange-400 rounded-full text-white p-3 absolute -right-5 hidden md:block ">
                  {
                    isExpanded ? <CgClose /> : <CgChevronRight />
                  }
                </button>
              </div>
            </div>
            <div className="flex-1 p-2">
              {
                navLinks.map((item, index) =>
                  <div key={index}>
                    <NavLink
                      to={item.link}
                      onClick={() => handleIndexClick(index)}
                      className={"p-4 shadow rounded-md mx-2 my-3 cursor-pointer flex flex-col gap-7 group" + (isActive == index ? " text-white bg-orange-500" : "")}>
                      <div className="flex gap-3 items-center overflow-hidden transition-all duration-700">
                        <div>
                          {<item.icon className="text-2xl" />}
                        </div>
                        <div className={`hidden md:block transition-all duration-700 ${isExpanded ? 'w-[100%]' : 'w-0'}`}>
                          {item.name}
                        </div>
                      </div>
                      {!isExpanded && (
                        <div
                          className={`absolute left-full rounded-md px-2 py-1 ml-2 bg-orange-100 text-orange-800 text-sm invisible opacity-5 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 duration-500`}
                        >
                          {item.name}
                        </div>
                      )}
                    </NavLink>

                  </div>)
              }
            </div>
            <div className="flex items-center gap-3 bg-slate-50 justify-between p-4">
              <h4>LD</h4>
              <div className={`flex flex-col overflow-hidden transition-all duration-700 ${isExpanded ? 'w-[100%]' : 'w-0'}`}>
                <p className='text-center m-3'>
                  {
                    session?.user.user_metadata.full_name
                  }
                  <br />
                  {
                    session?.user?.email
                  }
                </p>
              </div>
            </div>
          </nav>
        </aside>
      </div>
      {/* -------------------------- */}
      <div className={`p-6 ${isExpanded ? 'w-[81%] md:w-[75%] lg:w-[80%] transition-all duration-700' : ' md:w-[88%] lg:w-[91%] xl:w-[94%]'}`}>
        <Outlet />
      </div>
    </div>
  )
}
export default Body3