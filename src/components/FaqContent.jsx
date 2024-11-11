import React, { useState } from "react";

const FaqContent = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeQuestion, setActiveQuestion] = useState({});

    const faqData = [
        {
            category: "Getting Started",
            articles: [
                {
                    question: "Do my employees need an iPhone to use TimeStation?",
                    answer: "No, TimeStation works on various devices including Android and web browsers."
                },
                {
                    question: "Can I use TimeStation from Multiple Locations?",
                    answer: "Yes, you can access TimeStation from multiple locations by logging in on any supported device."
                },
                {
                    question: "What devices are supported by TimeStation?",
                    answer: "TimeStation supports iOS, Android, and web-based access."
                },
                {
                    question: "Can I import multiple employees and departments into TimeStation?",
                    answer: "Yes, you can import multiple employees and departments via a CSV file."
                },
                {
                    question: "Can I use TimeStation to only track attendance?",
                    answer: "Yes, TimeStation can be used solely for attendance tracking if desired."
                },
            ],
        },
        {
            category: "Using TimeStation",
            articles: [
                {
                    question: "How do I manually create or modify a time entry?",
                    answer: "You can add or edit time entries in the TimeStation dashboard under the 'Manage Time' section."
                },
                {
                    question: "Can employees punch in & out for breaks and lunch?",
                    answer: "Yes, TimeStation supports punching in and out for breaks and meals."
                },
                {
                    question: "How do I create additional administrators?",
                    answer: "Go to 'Settings' > 'User Management' to add more administrators."
                },
                {
                    question: "How do I use GPS location tagging?",
                    answer: "Enable GPS tagging in settings to track employees' punch locations."
                },
                {
                    question: "How do I change the camera used to scan cards?",
                    answer: "You can change the camera in device settings under 'Camera Options.'"
                },
            ],
        },
        {
            category: "Employees & Departments",
            articles: [
                {
                    question: "How Do I Delete an Employee?",
                    answer: "Navigate to the employee's profile and select the delete option."
                },
                {
                    question: "How Do I Delete a Department?",
                    answer: "You can delete a department under the 'Departments' section in settings."
                },
                {
                    question: "How do I track time across multiple jobs or projects?",
                    answer: "TimeStation allows you to assign jobs or projects to employees for tracking purposes."
                },
                {
                    question: "How Can Employees Login To The TimeStation Site or Mobile App?",
                    answer: "Employees can log in using their credentials provided by the administrator."
                },
                {
                    question: "How can employees access the employee self-service portal?",
                    answer: "Employees can access the self-service portal from their login dashboard."
                },
            ],
        },
        {
            category: "Reporting & Payroll",
            articles: [
                {
                    question: "What reports should I use for payroll?",
                    answer: "Use the payroll reports under the 'Reports' section for payroll data."
                },
                {
                    question: "How can employees check their activity online?",
                    answer: "Employees can view their activity through the self-service portal."
                },
                {
                    question: "Can I print individual time sheets for each employee?",
                    answer: "Yes, individual time sheets can be printed from the reports section."
                },
                {
                    question: "Does TimeStation calculate overtime pay?",
                    answer: "TimeStation can calculate overtime pay based on configured policies."
                },
                {
                    question: "How does Time Rounding Work?",
                    answer: "Time rounding adjusts the clock-in/out times to the nearest configured interval."
                },
            ],
        },
        {
            category: "Billing",
            articles: [
                {
                    question: "Can I Pay For My Subscription Yearly?",
                    answer: "Yes, annual subscription payment options are available in the billing section."
                },
                {
                    question: "How Do I Change My Credit Card Information?",
                    answer: "You can update your credit card details in the 'Billing' section."
                },
                {
                    question: "How Do I Change My Billing Plan?",
                    answer: "To change your billing plan, go to the subscription settings and select a new plan."
                },
                {
                    question: "What Payment Methods are Supported by TimeStation?",
                    answer: "TimeStation supports various payment methods, including credit cards and PayPal."
                },
                {
                    question: "Can I Suspend or Cancel My Subscription?",
                    answer: "Yes, you can suspend or cancel your subscription under 'Account Settings.'"
                },
            ],
        },
        {
            category: "Troubleshooting",
            articles: [
                {
                    question: "I just added a new employee but they can’t Punch In.",
                    answer: "Ensure the new employee has been assigned the correct permissions and access."
                },
                {
                    question: "My employee didn’t receive an invitation email to setup their account.",
                    answer: "Check the email address for accuracy and resend the invitation if needed."
                },
                {
                    question: "Recent activity is missing from the TimeStation site.",
                    answer: "Check your connection and ensure data sync is enabled for recent activity."
                },
                {
                    question: "I can't create an employee because their email address is already in use.",
                    answer: "If the email is already in use, you may need to delete or modify the existing profile."
                },
                {
                    question: "I Forgot My Password",
                    answer: "Click 'Forgot Password' on the login page to reset your password."
                },
            ],
        },
    ];

    const toggleCategory = (index) => {
        setActiveCategory(activeCategory === index ? null : index);
        setActiveQuestion({}); // Reset nested questions when category changes
    };

    const toggleQuestion = (categoryIndex, questionIndex) => {
        setActiveQuestion((prevState) => ({
            ...prevState,
            [categoryIndex]: prevState[categoryIndex] === questionIndex ? null : questionIndex,
        }));
    };

    return (
        <div className="mx-auto p-5">
            <div className="mt-6">
                {/* FAQ Accordion Section */}
                <div className="col-span-2 bg-white p-4 shadow rounded">
                    <h3 className="text-lg font-semibold mb-4">FAQs</h3>
                    <div>
                        {faqData.map((item, index) => (
                            <div key={index} className="accordion-item mb-4">
                                <button
                                    onClick={() => toggleCategory(index)}
                                    className="accordion-button text-left w-full py-3 px-5 text-lg font-semibold bg-gray-200 rounded-lg focus:outline-none"
                                >
                                    {item.category}
                                </button>
                                {activeCategory === index && (
                                    <div className="accordion-content mt-2 p-4 bg-gray-50 rounded-lg">
                                        {item.articles.map((article, i) => (
                                            <div key={i} className="mb-2">
                                                <button
                                                    onClick={() => toggleQuestion(index, i)}
                                                    className="w-full text-left text-md font-medium py-2 px-4 bg-gray-100 rounded-lg"
                                                >
                                                    {article.question}
                                                </button>
                                                {activeQuestion[index] === i && (
                                                    <div className="mt-2 pl-4 pr-2 py-2 bg-gray-50 rounded-lg border-l-4 border-blue-700">
                                                        {article.answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqContent;
