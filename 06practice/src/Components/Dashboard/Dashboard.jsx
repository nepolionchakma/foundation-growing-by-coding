import React, { useState } from 'react';
import './Dashboardstyle.css'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleClick = (id) => {
        setActiveTab(id);
    };


    const tabs = [
        {
            id: 1,
            label: 'Tab 1',
            content: 'Content for Tab 1',
        },
        {
            id: 2,
            label: 'Tab 2',
            content: 'Content for Tab 2',
        },
        {
            id: 3,
            label: 'Tab 3',
            content: 'Content for Tab 3',
        },
    ];



    return (
        <div className='w-[1200px] mx-auto p-4'>
            <div className='flex justify-between vertical-tabs'>
                <div className='w-1/4 bg-red-300 p-3'>
                    <div>
                        <div className="tabs">
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => handleClick(tab.id)}
                                >
                                    {tab.label}
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
                <div className='w-3/4 bg-orange-300 p-3'>
                    <div className="tab-content">
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
                            >
                                {tab.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;