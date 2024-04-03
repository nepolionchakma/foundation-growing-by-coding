import React, { useCallback, useEffect, useState } from 'react';

const Generatepassword = () => {


    const [range, setRange] = useState(8);
    const [numberAllow, setNumberAllow] = useState(false);
    const [charecterAllow, setCharecterAllow] = useState(false);
    const [password, setPassword] = useState("");


    // console.log(range);
    const generatePassword = useCallback(() => {

        let pass = ""
        // let strongPass = str
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let num = "0123456789"
        let char = "!@#$%^&*()_+?"
        if (numberAllow) str += num
        if (charecterAllow) str += char
        for (let i = 1; i <= range; i++) {
            let charPass = Math.floor(Math.random() * str.length + 1)
            console.log(charPass, 'cagpass');
            pass += str.charAt(charPass)
        }
        console.log(str.charAt(22), "pass");
        setPassword(pass)


    }, [range, numberAllow, charecterAllow, setPassword])
    useEffect(() => {
        generatePassword()
    }, [range, numberAllow, charecterAllow])
    return (
        <div className='h-screen flex flex-col  items-center'>
            <div className='w-[600px] bg-cyan-400 p-6 rounded-xl overflow-hidden m-8'>
                <div>


                    {/* Password  */}
                    <input
                        readOnly
                        value={password}
                        type="text"
                        className='outline-none w-[400px] bg-slate-500 outline-1 rounded-s-xl py-4 px-6' />
                    <button className=' bg-orange-600 rounded-e-xl py-4 px-6'>copy</button>
                </div>
                <div className='my-4 flex gap-3 items-center'>


                    {/* -----Range----- */}
                    <input
                        onChange={(e) => setRange(e.target.value)}
                        value={range}
                        type="range" min={0} max={10} />
                    <label className='font-bold'>Range : {range}</label>
                    <br />


                    {/* -----Number---- */}
                    <input
                        defaultChecked={numberAllow}
                        onClick={() => setNumberAllow((pre) => !pre)}
                        type="checkbox" />
                    <label className='font-bold'>Number</label>


                    {/* ---Charekter---- */}
                    <input
                        defaultChecked={charecterAllow}
                        onClick={() => setCharecterAllow((pre) => !pre)}
                        type="checkbox" />
                    <label className='font-bold'>Charecter</label>
                </div>
            </div>

        </div>
    );
};

export default Generatepassword;