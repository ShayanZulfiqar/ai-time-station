import React from 'react';

const FeatureCard = ({ icon, title, subtitle }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto transform transition-transform hover:scale-105">
            {/* Icon */}
            <div className="flex justify-center items-center mb-4">
                <div className="text-blue-600  text-5xl">{icon}</div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{title}</h3>

            {/* Subtitle */}
            <p className="text-gray-600 text-center">{subtitle}</p>
        </div>
    );
};

export default FeatureCard;
