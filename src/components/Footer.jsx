"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <footer className="relative w-full bg-[#030014] py-8 overflow-hidden">

            <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <p className="text-gray-400 text-xs md:text-sm font-medium tracking-wide">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-purple-400"
                        >
                            ©
                        </motion.span>
                        {" "}{currentYear} Sheikh Muntaqim Ahmed Al Hasib. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;