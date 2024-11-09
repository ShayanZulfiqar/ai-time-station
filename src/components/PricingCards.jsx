import React from 'react';

const PricingCards = ({ title, price, features }) => {
    return (
        <div className="space-y-4 border-gray-300 shadow-lg my-10 p-6 border rounded-lg max-w-sm">
            <h2 className="font-semibold text-2xl text-center">{title}</h2>
            <div className="text-center">
                <p className="font-bold text-4xl text-indigo-600">{price}</p>
                <p className="text-gray-500 text-lg">per month</p>
            </div>
            <div className="space-y-2">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <p className="text-gray-700">{feature}</p>
                    </div>
                ))}
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg w-full font-semibold text-white transition duration-300">
                Get Started
            </button>
        </div>
    );
};

export default function Pricingcard() {
    const plans = [
        {
            title: 'Basic Plan',
            price: '$19',
            features: ['1 User', '10GB Storage', 'Email Support'],
        },
        {
            title: 'Pro Plan',
            price: '$49',
            features: ['5 Users', '50GB Storage', 'Priority Support'],
        },
        {
            title: 'Enterprise Plan',
            price: '$99',
            features: ['Unlimited Users', '200GB Storage', '24/7 Support'],
        },
    ];

    return (
        <div className="container mx-auto">
            <div className="grid px-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
                <PricingCards key={index} title={plan.title} price={plan.price} features={plan.features} />
            ))}
        </div>
        </div>
    );
}
