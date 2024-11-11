import React from "react";
import { FaApple, FaAndroid } from "react-icons/fa";
import Button from "./Button";

const DownloadSection = () => {
    return (
        <div className="bg-blue-50">
            <div className="container md:px-24 px-10 mx-auto">
            <div className="flex flex-col justify-center items-center  py-12">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Download TimeStation</h2>
                <p className="text-gray-600 text-center mb-8 max-w-lg">
                    Get the free TimeStation App for your smartphone or tablet. It's easy, just click on the download button for your device.
                </p>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* iOS Download */}
                    <div className="flex flex-col items-center bg-white cursor-pointer p-6 shadow-lg rounded-lg w-72 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <FaApple className="text-gray-800 text-6xl mb-4" />
                        <h3 className="text-blue-600 font-bold text-lg mb-2">TimeStation for Apple iOS</h3>
                        <p className="text-gray-600 text-sm mb-4 text-center">
                            For iOS devices running iOS 7.0 or higher, including iPhone, iPad, and iPod Touch.
                        </p>
                        <Button text="Download for iOS" link="/Signup" width="100%" />
                    </div>

                    {/* Android Download */}
                    <div className="flex flex-col items-center bg-white cursor-pointer p-6 shadow-lg rounded-lg w-72 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <FaAndroid className="text-green-500 text-6xl mb-4" />
                        <h3 className="text-blue-600 font-bold text-lg mb-2">TimeStation for Google Android</h3>
                        <p className="text-gray-600 text-sm mb-4 text-center">
                            For Android smartphones and tablets running Android 2.3.3 or higher.
                        </p>
                        <Button text="Downlaod for android" link="/Signup" width="100%" />

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DownloadSection;
