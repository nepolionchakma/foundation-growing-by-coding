import React, { useState } from 'react';
import useCurrencyInfo from '../../CustomHook/useCurrencyInfo';
import Hero from '../Hero/Hero';
import { InputBox } from '../Input';

const Home = ({ count, handleClick, handleClickRemove }) => {
    const [color, setColor] = useState()
    const indigo = (e) => {
        setColor(e);
    }

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [amountConvert, setAmountConvert] = useState(0)

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to)
        setTo(from)
        setAmountConvert(amount)
        setAmount(amountConvert)
    }
    const convert = () => {
        setAmountConvert(amount * currencyInfo[to])
    }
    return (
        <div style={{ backgroundColor: color }} className='h-screen w-full bg-slate-400'>
            <Hero></Hero>




            <div className={`w-1/2 mx-auto bg-slate-300 p-5 mb-36 rounded-lg`}>
                <div className="flex w-full justify-center mx-auto bg-slate-100 p-3 rounded-lg gap-5">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}>
                        <InputBox
                            label="form"
                            amount={amount}
                            onChangeAmount={(amount) => setAmount(amount)}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            currencyOptions={options}
                            selectCurrency={from}
                        />
                        <button onClick={swap}>Swap</button>
                        <InputBox
                            label="To"
                            amount={amountConvert}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                        <button type='submit'> Covert {from.toUpperCase()} to {to.toUpperCase()}</button>
                    </form>
                </div>
            </div>









            {/* <Banner count={count} handleClick={handleClick} handleClickRemove={handleClickRemove}></Banner> */}
            <div className='bg-white bottom-9 rounded-md p-5 flex flex-wrap  justify-center gap-5  text-white fixed inset-x-0'>
                <button onClick={() => indigo("red")} className='bg-red-600 p-3 rounded-lg justify-center flex flex-wrap'>Red</button>
                <button onClick={() => indigo("green")} className='bg-green-600 p-3 rounded-lg'>Green</button>
                <button onClick={() => indigo("orange")} className='bg-orange-600 p-3 rounded-lg'>orange</button>
                <button onClick={() => indigo("blue")} className='bg-blue-500 p-3 rounded-lg'>blue</button>
                <button onClick={() => indigo("sky")} className='bg-sky-600 p-3 rounded-lg'>sky</button>
                <button onClick={() => indigo("cyan")} className='bg-cyan-500 p-3 rounded-lg'>cyan</button>
            </div>
        </div>
    );
};

export default Home;