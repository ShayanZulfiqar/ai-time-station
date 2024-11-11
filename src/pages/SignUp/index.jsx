import React, { useState } from "react";
import Button from "../../components/Button";


const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (!agreedToTerms) {
            alert("You must agree to the terms and conditions!");
            return;
        }

        console.log("Sign-Up Info:", { fullName, username, email, phone, dob, password });
    };

    return (
        <>
            <div className="flex justify-center items-center bg-blue-100 min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl my-8">
                    <div className="space-y-6 bg-white shadow-lg p-6 sm:p-8 rounded-xl">
                        <h2 className="font-semibold text-2xl text-blue-600 text-center">Sign Up</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block font-medium text-gray-700 text-sm">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                    className="block border-gray-300 mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full text-gray-700 text-sm focus:outline-none"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Username */}
                            <div>
                                <label htmlFor="username" className="block font-medium text-gray-700 text-sm">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="block border-gray-300 mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full text-gray-700 text-sm focus:outline-none"
                                    placeholder="Choose a username"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block font-medium text-gray-700 text-sm">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block border-gray-300 mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full text-gray-700 text-sm focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block font-medium text-gray-700 text-sm">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="block border-gray-300 mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full text-gray-700 text-sm focus:outline-none"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label htmlFor="dob" className="block font-medium text-gray-700 text-sm">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    id="dob"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    required
                                    className="block border-gray-300 mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full text-gray-700 text-sm focus:outline-none"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block font-medium text-gray-700 text-sm">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="block border-gray-300 mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full text-gray-700 text-sm focus:outline-none"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirmPassword" className="block font-medium text-gray-700 text-sm">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="block border-gray-300 mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full text-gray-700 text-sm focus:outline-none"
                                    placeholder="Confirm your password"
                                />
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                                />
                                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                                    I agree to the Terms and Conditions
                                </label>
                            </div>

                            {/* Sign Up Button */}
                            <Button text="Sign Up" link="/Login" width="100%" />
                        </form>
                        <p className="text-center text-gray-500 text-sm">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-500 hover:underline">Log in</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
