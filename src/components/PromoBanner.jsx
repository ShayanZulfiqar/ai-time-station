import React from "react";
import Button from "./Button";
import './PromoBanner.css'

const PromoBanner = () => {
    return (
        <div className="promo-banner relative">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 px-8 md:px-1 flex justify-start items-center">
                {/* Text and Button Container */}
                <div className="space-y-6 md:ml-20 ml-0 p-8 max-w-lg bg-slate-200 rounded-xl w-full lg:w-auto mx-auto">
                    <h2 className="font-bold text-2xl lg:text-4xl">
                        Turn any smartphone or tablet into a cloud-based time & attendance
                        system
                    </h2>
                    <Button text="Sign Up for Free" link="/Signup" width="50%" />
                </div>
            </div>
        </div>

    );
};

export default PromoBanner;
