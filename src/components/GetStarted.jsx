import React from 'react';
import { FaUserPlus, FaPrint, FaMobileAlt } from 'react-icons/fa';

const GetStarted = () => {
    return (
        <div className="bg-blue-500 text-white py-24 p-6 rounded-lg text-center">
            <h2 className="text-3xl font-semibold mb-16">Get started in 3 easy steps!</h2>
            <div className="flex flex-col md:flex-row justify-around items-center mt-6 space-y-6 md:space-y-0">

                {/* Step 1 */}
                <div className="text-center flex justify-center items-center flex-col">
                    <div className="text-7xl mb-2">
                        <FaUserPlus />
                    </div>
                    <h3 className="text-xl mt-8 font-bold">1. Signup</h3>
                    <p>Signup and add your employees</p>
                </div>

                {/* Step 2 */}
                <div className="text-center flex justify-center items-center flex-col">
                    <div className="text-7xl mb-2">
                        <FaPrint />
                    </div>
                    <h3 className="text-xl mt-8 font-bold">2. Print</h3>
                    <p>Print your Employee Cards</p>
                </div>

                {/* Step 3 */}
                <div className="text-center flex justify-center items-center flex-col">
                    <div className="text-7xl mb-2">
                        <FaMobileAlt />
                    </div>
                    <h3 className="text-xl mt-8 font-bold">3. Download</h3>
                    <p>Download TimeStation into a smartphone or tablet</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
