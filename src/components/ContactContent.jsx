import React from "react";
import Button from "./Button";

const ContactContent = () => {
    return (
        <>
            <div className="bg-blue-100">
                <div className="flex flex-col items-center py-10 px-4 md:px-24">
                    <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>

                    {/* Contact Information */}
                    <div className="w-full md:w-3/4 p-3 rounded-lg mb-8 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <p className="text-lg mb-2">Feel free to reach out to us via phone or email. We’re here to help!</p>
                        <div className="space-y-4 text-gray-700">
                            <p><strong>Email:</strong> support@yourwebsite.com</p>
                            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                            <p><strong>Address:</strong> 1234 Elm Street, Cityville, Country</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full md:w-3/4 bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold text-center my-4 mb-4">Send Us a Message</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="5"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <Button text=" Send Message" link="/Login" width="100%" />
                        </form>
                    </div>

                    {/* Map Section */}
                    <div className="w-full md:w-3/4 mt-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                title="Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195517764596!2d144.95373531531807!3d-37.817209979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d3c2d07e6e6!2sFederation%20Square%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1633020394739!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactContent;