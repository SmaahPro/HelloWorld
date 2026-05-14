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
        <footer className="relative w-full bg-gradient-to-b from-[#030014] to-[#1a0033] py-6 md:py-8 overflow-hidden">

            <div className="relative max-w-6xl mx-auto px-6 md:px-20">

                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <p className="text-purple-200 text-xs md:text-sm font-medium tracking-wide">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="inline-block"
                        >
                            ©
                        </motion.span>

                        <motion.span
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="inline-block ml-1"
                        >
                            {" "}{currentYear}
                        </motion.span>

                        <motion.span
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="inline-block ml-1"
                        >
                            {" "}Sheikh Muntaqim Ahmed Al Hasib.
                        </motion.span>

                        <motion.span
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="inline-block ml-1"
                        >
                            {" "}All Rights Reserved.
                        </motion.span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;