import React from 'react';
import img01 from '../assets/images/How it work img 01.png'
import img02 from '../assets/images/How it work img 02.png'
import img03 from '../assets/images/How it work img 03.png'
import img04 from '../assets/images/How it work img 04.png'
import img05 from '../assets/images/How it work img 05.png'
import img06 from '../assets/images/How it work img 06.png'
import videoimg from '../assets/images/HowItWorks_Video_Thumbnail.jpg'

const WhatNext = () => {
    return (
        <div className="px-24 my-16">
            <h2 className="text-2xl font-bold text-blue-500 mb-6">What Next?</h2>

            {/* Employee and Manager Section */}
            <div className="md:flex md:space-x-10">
                {/* Employee Info */}
                <div className="md:w-1/2">
                    <h3 className="text-lg font-semibold">Employees</h3>
                    <p className="text-gray-700">Employees can Punch In & Out using their employee cards or assigned PIN numbers.</p>
                    <div className="my-4">
                        <img
                            src={videoimg}
                            alt="Employee Punch In"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                        <p className="text-center text-sm text-gray-500 mt-2">See how easy it is for employees to Punch In & Out</p>
                    </div>
                </div>

                {/* Manager Info */}
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <h3 className="text-lg font-semibold">Managers</h3>
                    <p className="text-gray-700">Managers can track attendance, run reports, and manage employees on MyTimeStation.com</p>

                    <div className="grid grid-cols-3 gap-2 mt-4">
                        {/* Management Screens */}
                        <img src={img01} alt="Management Screen 1" className="rounded-lg object-fill border border-blue-300" />
                        <img src={img02} alt="Management Screen 2" className="rounded-lg object-fill border border-blue-300" />
                        <img src={img03} alt="Management Screen 3" className="rounded-lg object-fill border border-blue-300" />
                        <img src={img04} alt="Management Screen 4" className="rounded-lg object-fill border border-blue-300" />
                        <img src={img05} alt="Management Screen 5" className="rounded-lg object-fill border border-blue-300" />
                        <img src={img06} alt="Management Screen 6" className="rounded-lg object-fill border border-blue-300" />
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-2">View sample management screens</p>
                </div>
            </div>
        </div>
    );
};

export default WhatNext;
