import React, { useState } from 'react';

const InnerHero = ({ data }) => {
    const [show, setShow] = useState(false);
    let loadedData = data.dis;
    if (!show) {
        loadedData = loadedData.substring(0, 250);
    }
    // console.log(loadedData);
    return (
        <div className='duration-700'>
            <p>{loadedData}</p><button onClick={() => setShow(preState => !preState)}>{show ? "Less" : "Show"}</button>
        </div>
    );
};

export default InnerHero;