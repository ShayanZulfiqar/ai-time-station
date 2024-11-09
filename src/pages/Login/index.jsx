import React from 'react';
import Button from '../../components/Button';

const Login = () => {
    return (
        <div className="flex justify-center items-center bg-blue-100 min-h-screen">
            <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-sm">
                <h2 className="mb-6 font-bold text-2xl text-center">Login</h2>
                <form>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700 text-sm">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border-gray-300 mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block font-medium text-gray-700 text-sm">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="border-gray-300 mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <Button text="Submit" link="/" width="100%" />

                </form>

                {/* Sign Up Link */}
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
