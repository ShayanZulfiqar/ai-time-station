import React, { useState } from "react";
import Button from "./Button";
import FaqContent from "./FaqContent";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            category: "Getting Started",
            articles: [
                "Do my employees need to have an iPhone to use TimeStation?",
                "Can I use TimeStation from Multiple Locations?",
                "What devices are supported by TimeStation?",
                "Can I import multiple employees and departments into TimeStation?",
                "Can I use TimeStation to only track attendance?",
            ],
        },
        {
            category: "Using TimeStation",
            articles: [
                "How do I manually create or modify a time entry?",
                "Can employees punch in & out for breaks and lunch?",
                "How do I create additional administrators?",
                "How do I use GPS location tagging?",
                "How do I change the camera used to scan cards?",
            ],
        },
        {
            category: "Employees & Departments",
            articles: [
                "How do I delete an employee?",
                "How do I delete a department?",
                "How do I track time across multiple jobs or projects?",
                "How can employees login to the TimeStation site or mobile app?",
                "How can employees access the employee self-service portal?",
            ],
        },
        {
            category: "Reporting & Payroll",
            articles: [
                "What reports should I use for payroll?",
                "How can employees check their activity online?",
                "Can I print individual time sheets for each employee?",
                "Does TimeStation calculate overtime pay?",
                "How does time rounding work?",
            ],
        },
        {
            category: "Billing",
            articles: [
                "Can I pay for my subscription yearly?",
                "How do I change my credit card information?",
                "How do I change my billing plan?",
                "What payment methods are supported by TimeStation?",
                "Can I suspend or cancel my subscription?",
            ],
        },
        {
            category: "Troubleshooting",
            articles: [
                "I just added a new employee but they can’t punch in.",
                "My employee didn’t receive an invitation email to set up their account.",
                "Recent activity is missing from the TimeStation site.",
                "I can’t create an employee because their email address is already in use.",
                "I forgot my password.",
            ],
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-7xl mx-auto p-5">
            <div className="container mx-auto">
                <header className="flex flex-col md:flex-row md:px-24 px-4 justify-between items-center py-4 border-b space-y-4 md:space-y-0">
                    <div className="text-lg md:text-xl font-semibold">Support Center</div>
                    <div className="flex w-full md:w-auto items-center space-x-2">
                        <input
                            type="text"
                            className="p-2 w-full md:w-auto rounded border"
                            placeholder="Search the TimeStation Support Center"
                        />
                        <Button text="Search" link="/Signup" />
                    </div>
                </header>

            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Topics Section */}
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="text-lg font-semibold mb-4">Browse by Topic</h3>
                    <div className="space-y-4">
                        {faqData.map((item, idx) => (
                            <div key={idx} className="font-semibold">
                                {item.category}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Accordion Section */}
                {/* <div className="col-span-2 bg-white p-4 shadow rounded">
                    <h3 className="text-lg font-semibold mb-4">FAQs</h3>
                    <div>
                        {faqData.map((item, index) => (
                            <div key={index} className="accordion-item mb-2">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="accordion-button text-left w-full py-3 px-5 text-lg font-semibold bg-gray-200 rounded-lg focus:outline-none"
                                >
                                    {item.category}
                                </button>
                                {activeIndex === index && (
                                    <div className="accordion-content mt-2 p-4 bg-gray-50 rounded-lg">
                                        {item.articles.map((article, i) => (
                                            <div key={i} className="py-2 border-b last:border-none">
                                                {article}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="col-span-2 bg-white p-4 shadow rounded">

                    <FaqContent />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
