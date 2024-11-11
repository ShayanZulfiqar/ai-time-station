import React from "react";
import Button from "./Button";

const PromoBanner = () => {
    return (
        <div
            className="relative w-full h-[400px] lg:h-[500px]" // Removed conflicting Tailwind classes
            style={{
                backgroundImage: `url('../assets/images/Home_Banner_02.jpg')`, // Corrected image path
                height: '450px',
                width: '100%',
                backgroundSize: 'cover',        // Ensures the image covers the entire div
                backgroundPosition: 'center',   // Centers the image
                backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
                backgroundAttachment: 'scroll', // Adjust as needed (scroll or fixed)
                backgroundColor: 'transparent', // Optional fallback color
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 flex justify-start items-center bg-black bg-opacity-40">
                {/* Text and Button Container */}
                <div className="space-y-6 ml-8 lg:ml-20 p-8 max-w-lg text-white">
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
