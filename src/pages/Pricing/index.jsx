import React from "react";
import Pricingcard from "../../components/PricingCards";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const Pricing = () => {
    return (
        <>
            <Navbar />
            <Pricingcard />
            <div className="container d-grid place-items-center my-10 md:px-24 px-10">
                <Button text="Sign up for free" link="/SignUp" />
            </div>
            <Footer />


        </>
    )
}

export default Pricing;