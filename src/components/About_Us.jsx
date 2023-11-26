import React, { useState } from "react";
import { primary, sections } from "../variables";
import WhiteLogoSvg from "../assets/SVG/Logo WhiteAsset 21.svg";
// import fullLogo from "../assets/PNG/logo transparent.png";
import "../styles/Navbar.css";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import picture from "../assets/PNG/About Us.png";

function About_Us() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-4 py-8">
            <div className="rounded-lg bg-white p-4 shadow-lg">
                <br />
                <h1 className="text-4xl font-bold text-gray-800">We are CYB:ORG</h1>
                <br />
                <h2 className="text-2xl font-semibold text-gray-800">
                For us, nothing is out of reach
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
                metus eu risus luctus tincidunt. Proin eget fermentum quam. Donec id
                dolor eget odio consectetur dapibus.
                </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4 shadow-lg">
                <img
                src="picture"
                alt="Circuit board"
                className="h-48 w-48 object-cover"
                />
            </div>
            </div>
        </div>
    )

}

export default About_Us;
