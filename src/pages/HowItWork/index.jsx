import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GetStarted from "../../components/GetStarted";
import WhatNext from "../../components/WhatNext";
import img01 from '../../assets/images/howitworkimg01.jpg';
import img02 from '../../assets/images/howitworkimg02.jpg';
import img03 from '../../assets/images/howitworkimg03.png';
import img04 from '../../assets/images/howitworkimg04.png';
import img05 from '../../assets/images/howitworkimg05.png';



const HowItWork = () => {
    return (
        <>
            <Navbar />
            <GetStarted />
            <WhatNext />
            <div className="container my-16">
                <h2 className="text-2xl md:px-24 px-10 font-bold text-blue-500 mb-6">App Screenshots</h2>
                <div className="grid md:px-24 px-10 grid-cols-3 gap-10 mt-8">
                    <img src={img01} alt="Management Screen 1" className="rounded-lg object-fill border border-blue-300" />
                    <img src={img02} alt="Management Screen 1" className="rounded-lg object-fill border border-blue-300" />
                    <img src={img03} alt="Management Screen 1" className="rounded-lg object-fill border border-blue-300" />
                    <img src={img04} alt="Management Screen 1" className="rounded-lg object-fill border border-blue-300" />
                    <img src={img05} alt="Management Screen 1" className="rounded-lg object-fill border border-blue-300" />


                </div>
            </div>
            <Footer />


        </>
    )
}

export default HowItWork;