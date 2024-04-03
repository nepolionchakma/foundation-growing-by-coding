import React from 'react';
import useTheme from '../contex/themeContext';

const Theme = () => {
    const { themeMode, lightTheme, darkTheme } = useTheme()
    const onChangeBtn = (e) => {
        const darkStatus = e.currentTarget.checked
        if (darkStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <div className='flex justify-center gap-4 bg-orange-700 rounded-lg p-4 my-5'>
            <input placeholder='themeCheck' onChange={onChangeBtn} checked={themeMode === "dark"} type="checkbox" /> Theme
        </div>
    );
};

export default Theme;