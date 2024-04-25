import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';

const LogIn = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { register, logIn, error } = useAuth();
  // console.log(location, 'location')
  // console.log(from, 'from')
  const handleRegister = (e) => {
    e.preventDefault()
    register(fullName, email, password)
  }
  const handleLogIn = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then(() => {
        navigate(from, { replace: true })
      }
      )

    // console.log(from)
  }

  return (
    <div className=''>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {
            isRegister ?
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-white">If yor are register user </h1>
                <p className="leading-relaxed mt-4">Please Login Now. It very simple to login</p>
              </div>
              :
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-white">Register means authenticated. <br /> Who are legel cart anything</h1>
                <p className="leading-relaxed mt-4">create account get more offer .</p>
              </div>
          }


          <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            {
              isRegister ?
                <div>
                  <form onSubmit={handleLogIn}>
                    <h2 className="text-white text-lg font-medium title-font mb-5">Log In</h2>
                    <div className="relative mb-4">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                      <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" id="password" name="password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">LogIn</button>

                  </form>
                  <span className='text-red-700 my-9'>{error?.error?.message}</span>
                </div>
                :
                <form onSubmit={handleRegister}>
                  <h2 className="text-white text-lg font-medium title-font mb-5">Register</h2>
                  <div className="relative mb-4">
                    <label htmlFor="fullName" className="leading-7 text-sm text-gray-400">Full Name</label>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      type="text" id="fullName" name="fullName" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <div className="relative mb-4">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password" id="password" name="password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <button
                    type='submit'
                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>

                </form>
            }
            {
              isRegister ?
                <p className="text-xs mt-3">No account ? <span
                  className=' cursor-pointer underline' onClick={() => setIsRegister(!isRegister)}>Register</span></p>
                :
                <p className="text-xs mt-3">Already Registered ? <span className=' cursor-pointer underline' onClick={() => setIsRegister(!isRegister)} >Login</span></p>
            }
          </div>

        </div >
      </section >
    </div >
  );
};

export default LogIn;