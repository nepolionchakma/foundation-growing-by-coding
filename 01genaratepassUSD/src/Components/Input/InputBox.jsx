import React, { useId } from 'react';

const InputBox = ({
    label,
    amount,
    onChangeAmount,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) => {
    const amountInputId = useId()
    return (
        <div className={`w-full mx-auto bg-slate-300 p-5 my-8 rounded-lg ${className}`}>
            <div className="flex   mx-auto bg-slate-100 p-3 rounded-lg gap-5">
                <div className="w-1/2 flex flex-col gap-4">
                    <label htmlFor={amountInputId}>{label}</label>
                    <input
                        id={amountInputId}
                        className='outline-none bg-transparent'
                        type="number"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onChangeAmount && onChangeAmount(Number(e.target.value))}
                        placeholder='Amount' />
                </div>
                <div className='w-1/3 flex flex-col gap-4 justify-end text-right'>
                    <p className=''>Currency type</p>
                    <select
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        value={selectCurrency}
                        disabled={currencyDisable}>
                        {
                            currencyOptions.map((current) => (
                                <option key={current}
                                    value={current}>{current}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default InputBox;