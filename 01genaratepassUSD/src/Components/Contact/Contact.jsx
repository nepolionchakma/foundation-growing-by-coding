import React, { useCallback, useEffect, useRef, useState } from 'react';

const Contact = () => {
    const [password, setPassword] = useState('');
    const [range, setRange] = useState(8);
    const [numberAllow, setNumberAllow] = useState(false);
    const [charecterAllow, setCharecterAllow] = useState(false);
    console.log(password.length, "length", password);
    const passwordGenaretor = useCallback(() => {
        let pass = ""
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllow) string += "12345678901234567891234567890123456789"
        if (charecterAllow) string += "!@#$%^&*()_+<>?!@#$%^&*()_+<>?!@#$%^&*()_+<>?"
        for (let i = 1; i <= range; i++) {
            let charecterPassCount = Math.floor(Math.random() * string.length + 1)
            pass += string.charAt(charecterPassCount)

        }
        setPassword(pass);
    }, [range, numberAllow, charecterAllow, setPassword])
    useEffect(() => {
        passwordGenaretor()
    }, [range, numberAllow, charecterAllow, setPassword])

    const passwordRef = useRef(null)
    const copyPasswordClipBoard = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])
    return (

        <div className='h-screen'>
            <div className='mx-auto my-8 p-4 rounded-md text-white max-w-md bg-slate-600'>
                <div>
                    <span className='text-center'>Genarate Password</span>
                    <div className='flex justify-center my-4'>
                        <input
                            ref={passwordRef}
                            value={password}
                            placeholder='Password'
                            className='py-2 px-4 rounded-s-md outline-none text-black'
                            readOnly
                            type="text" />
                        <button onClick={copyPasswordClipBoard} className='py-2 px-4 rounded-e-md bg-slate-400 hover:bg-slate-500'>Copy</button>
                    </div>
                    <div className='flex gap-3'>
                        <input
                            min={1}
                            max={20}
                            value={range}
                            onChange={(e) => setRange(e.target.value)}
                            type="range" />

                        <label htmlFor="">Range : {range}</label>
                        <input
                            onClick={() => setNumberAllow((pre) => !pre)}
                            type="checkbox" />
                        <label htmlFor="">Number</label>
                        <input
                            onClick={() => setCharecterAllow((pre) => !pre)}
                            type="checkbox" />
                        <label htmlFor="">Charecter</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;