import { useMyContext } from "@/Contexts/MyContext"
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function InviteUser() {
  const { updateUser, session } = useMyContext();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();
  console.log(session)
  const handleUpdateUser = (e) => {
    e.preventDefault();
    updateUser(password,)
    window.location.href = '/'
  };

  return (
    <div className="flex flex-col w-1/3 mx-auto my-9 gap-4 bg-slate-100 p-4 rounded text-center">
      <h5>Update Profile</h5>
      <div className="w-[60%] mx-auto">
        <form onSubmit={handleUpdateUser}>

          <p>{session?.user.email}</p>

          <div className="flex gap-3 items-center justify-between my-2">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" id="password" name="password" className=" bg-orange rounded border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-orange-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <Button type='submit'>Save</Button>
        </form>
      </div>
    </div>
  )
}
export default InviteUser