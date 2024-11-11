import React from "react";
// import Pricing from "../../components/PricingCards";
import Navbar from "../../components/Navbar";
import PromoBanner from "../../components/PromoBanner";
import TimeStationCard from "../../components/TimeStationCard";
import FeatureCard from "../../components/FeatureCard";
import { FaClock, FaRocket, FaCloud, FaChartLine, FaUser, FaMapMarkerAlt, FaSignal, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import Footer from "../../components/Footer";

const Home = () => {
    const cardContent = (
        <>
            <p>
                Using our Fast-Scan technology, employees can punch In & Out in less than a second, and because TimeStation runs in the cloud, there’s no software or servers to maintain.
            </p>
            <p>
                TimeStation is the perfect solution for small and medium businesses looking to track time and attendance without the usual costs and overhead of traditional systems.
            </p>
            <p>
                The TimeStation mobile App works with smartphones and tablets running Google Android or Apple iOS including iPhone, iPad, and iPod Touch.
            </p>
        </>
    );

    const applicationsContent = (
        <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Track employee time and attendance for your business</li>
            <li>Track student attendance for your school</li>
            <li>Track member attendance for your club or group</li>
            <li>Track time spent across multiple projects or clients</li>
        </ul>
    );

    const features = [
        {
            icon: <FaRocket />,
            title: 'Get up and running in minutes',
            subtitle: 'Our easy signup process combined with the ability to print your own employee cards means that you can be up and running in as little as 5 minutes!',
        },
        {
            icon: <FaClock />,
            title: 'Fast-Scan Technology',
            subtitle: 'With our Fast-Scan technology, employees can punch in & out in less than a second. Employees also have the option to punch by PIN if their card is not available.',
        },
        {
            icon: <FaCloud />,
            title: 'Cloud-Based',
            subtitle: 'Because TimeStation is cloud-based, there’s no software or hardware to maintain. Managers can access their time and attendance data anywhere they have access to the internet.',
        },
        {
            icon: <FaChartLine />,
            title: 'Advanced Reporting',
            subtitle: 'Managers have access to multiple online reports to track attendance and calculate pay. Reports can be exported to different formats allowing for easy integration with payroll systems.',
        },
        {
            icon: <FaUser />,
            title: 'Employee Self-Service Portal',
            subtitle: 'Using the employee self-service portal, employees can review their activity, punch in & out, view reports, and create or edit time entries. Managers have full control of which functionality each employee has access to.',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'GPS Location Tagging',
            subtitle: 'Map the geographical location where employees punch in and out from.',
        },
        {
            icon: <FaSignal />,
            title: 'Off-Line Mode',
            subtitle: 'If TimeStation always has access to the internet, that’s why TimeStation can operate in off-line mode. It has more stable connections with a complete data update. When an internet connection becomes available, your device will automatically synchronize all its data with MyTimeStation.com.',
        },
        {
            icon: <FaNetworkWired />,
            title: 'Use Multiple TimeStations',
            subtitle: 'You can link multiple TimeStations to your company, allowing you to track time and attendance across different locations and departments.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'Security',
            subtitle: 'TimeStation uses industry-standard SSL encryption for both MyTimeStation.com and the TimeStation Mobile App. This ensures that your data remains safe and secure end-to-end.',
        },
    ];

    return (
        <>
            <Navbar />
            <PromoBanner />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:px-24 px-10  md:grid-cols-2 gap-6 p-4">
                    <TimeStationCard
                        title="TimeStation Features"
                        description="A comprehensive system for tracking time and attendance."
                        content={cardContent}
                    />
                    <TimeStationCard
                        title="Why Choose TimeStation?"
                        description="Perfect for small to medium-sized businesses."
                        content={applicationsContent}
                    />
                </div>
            </div>
            <div className="container mx-auto my-10">
                <div className="grid cursor-pointer grid-cols-1 md:px-24 px-10 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            subtitle={feature.subtitle}
                        />
                    ))}
                </div>
            </div>
            {/* <Pricing /> */}
            <Footer />
        </>
    )
}
export default Home;