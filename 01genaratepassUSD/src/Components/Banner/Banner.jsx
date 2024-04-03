import React from 'react';

const Banner = ({ count, handleClick, handleClickRemove }) => {
    return (
        <div className='flex flex-wrap gap-4 w-[1200px] mx-auto p-4'>
            <h5>{count}</h5>
            <div className="bg-orange-500 rounded-lg">
                <button className='bg-orange-700  rounded-lg p-4' onClick={handleClick}>click</button>
                <button className='bg-orange-700  rounded-lg p-4' onClick={handleClickRemove}>Remove</button>
            </div>
        </div>
    );
};

export default Banner;