import React from "react";
import Button from "./Button";
import './PromoBanner.css'

const PromoBanner = () => {
    return (
        <div className="promo-banner">
            {/* Dark Overlay */}
            <div className="absolute inset-0 flex justify-start items-center">
                {/* Text and Button Container */}
                <div className="space-y-6 ml-8 lg:ml-20 p-8 max-w-lg bg-slate-200 rounded-xl ">
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
