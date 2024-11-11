import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* About Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm">We are committed to providing a reliable and accurate employee attendance tracking system, ensuring seamless work management and productivity monitoring.</p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-sm hover:underline">Home</a></li>
                            <li><a href="/Privacy" className="text-sm hover:underline">Privacy</a></li>
                            <li><a href="/attendance" className="text-sm hover:underline">Employee Attendance</a></li>
                            <li><a href="/reports" className="text-sm hover:underline">Reports</a></li>
                            <li><a href="/ContactPage" className="text-sm hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <p className="text-sm">Address: 456 Business Park, Suite 101, City, Country</p>
                        <p className="text-sm">Email: support@attendance.com</p>
                        <p className="text-sm">Phone: (123) 456-7890</p>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-sm hover:underline">Facebook</a>
                            <a href="#" className="text-sm hover:underline">Twitter</a>
                            <a href="#" className="text-sm hover:underline">LinkedIn</a>
                            <a href="#" className="text-sm hover:underline">Instagram</a>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Employee Attendance System. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
