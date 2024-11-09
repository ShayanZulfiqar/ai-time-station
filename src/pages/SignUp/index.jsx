import React, { useState } from "react";
import Button from "../../components/Button";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
        console.log("Sign-Up Info:", { email, password });
    };

    return (
        <div className="flex justify-center items-center bg-blue-100 min-h-screen">
            <div className="space-y-6 bg-white shadow-lg p-8 rounded-xl w-full max-w-md">
                <h2 className="font-semibold text-2xl text-blue-600 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700 text-sm">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block border-gray-300 mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full text-gray-700 text-sm focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium text-gray-700 text-sm">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="block border-gray-300 mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full text-gray-700 text-sm focus:outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                    <Button text="Sign Up" link="/Login" width="100%" />

                </form>
                <p className="text-center text-gray-500 text-sm">
                    Already have an account?{" "}

                </p>
            </div>
        </div>
    );
};

export default SignUp;
