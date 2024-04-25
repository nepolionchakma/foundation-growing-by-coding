// import { useState } from "react"
// import { motion } from "framer-motion";
// import {
//   Activity,
//   LayoutDashboard,
//   Clock1,
//   BarChart2,
//   ArrowRightLeft,
//   HelpCircleIcon,
//   ChevronRight,
//   CrossIcon,
//   MenuSquareIcon
// } from 'lucide-react';
// import { NavLink, Outlet } from "react-router-dom";


// function Body() {
//   const [isActive, setIsActive] = useState(0)
//   const navLinks = [
//     {
//       name: 'Dashboard',
//       icon: LayoutDashboard,
//       link: '/'
//     },
//     {
//       name: 'Activity',
//       icon: Clock1,
//       link: '/Activity'
//     },
//     {
//       name: 'Analytics',
//       icon: BarChart2,
//       link: '/Analytics'
//     },
//     {
//       name: 'Transactions',
//       icon: ArrowRightLeft,
//       link: '/Transactions'
//     },
//     {
//       name: 'Help Center',
//       icon: HelpCircleIcon,
//       link: '/Help'
//     },

//   ]
//   const [isExpended, setIsExpended] = useState(true);
//   const varients = {
//     expended: { width: '100%', },
//     nonExpended: { width: '38%', },
//   }
//   return (
//     <div className="flex gap-3">
//       <div className={"LeftSide p-3 " + (isExpended ? 'w-1/5' : 'w-1/5')}>
//         <motion.div
//           animate={
//             isExpended ? 'expended' : 'nonExpended'
//           }
//           transition={{ ease: "easeOut", }}
//           variants={varients}
//           className="h-screen border-r-2 relative">

//           <div className="logo p-8 flex gap-2">
//             <Activity />
//             <h4 className={isExpended ? "visible" : 'hidden'}>Logo</h4>
//           </div>

//           <div
//             onClick={() => setIsExpended(!isExpended)}
//             className="w-7 h-7 flex items-center -right-4 absolute top-14 rounded-full p-2 text-white bg-orange-500 ">
//             {
//               isExpended ? <CrossIcon /> : <MenuSquareIcon />
//             }
//           </div>

//           <div className="p-4">
//             {
//               navLinks.map((item, index) =>
//                 <div key={index}>
//                   <NavLink
//                     to={`${item.link}`}
//                     className={"p-4 shadow rounded-md m-2 cursor-pointer flex gap-4" + (isActive === index ? " text-white bg-orange-500" : "")}
//                     onClick={() => setIsActive(index)}>
//                     {<item.icon />}
//                     <span className={isExpended ? "visible " : 'hidden'}>{item.name}</span>
//                   </NavLink>
//                 </div>
//               )
//             }
//           </div>

//         </motion.div>
//       </div>

//       <div className={"RightSide p-3 bg-slate-400" + (isExpended ? 'w-4/5' : 'w-5/5')}>
//         <Outlet />
//       </div>

//     </div>
//   )
// }
// export default Body