"use client";

import profilePic from "@/assets/profile.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const titles = ["Web Developer", "AI Enthusiast", "Problem Solver"];

const HeroSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full lg:min-h-[90vh] min-h-screen bg-[#030712] text-white flex flex-col justify-center overflow-hidden py-10 md:py-0">

            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-5"
                >
                    <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-purple-400 text-[13px] font-semibold tracking-widest">
                        Available for Opportunities
                    </div>

                    <div className="space-y-1">
                        <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase">
                            Hello World, I am
                        </h2>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Sheikh Muntaqim <br />
                            <span className="text-gray-400">Ahmed Al Hasib</span>
                        </h1>
                    </div>

                    <div className="h-8 flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={titles[index]}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-lg md:text-xl font-light text-blue-400"
                            >
                                {titles[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <p className="max-w-sm text-gray-400 text-sm leading-relaxed">
                        Architecting digital experiences where code meets aesthetics.
                        Specialized in building high-performance web systems and AI integration.
                    </p>

                    <div className="flex gap-4 mt-2 flex-wrap">
                        <button
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all"
                        >
                            <Mail size={16} />
                            Contact Me
                        </button>

                        <button
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/SmaahPro.pdf";
                                link.download = "SmaahPro.pdf";
                                link.click();
                            }}
                            className="flex items-center gap-2 px-6 py-3 border border-gray-700 hover:bg-gray-800 text-sm font-medium rounded-full transition-all text-gray-300"
                        >
                            <Download size={16} />
                            CV
                        </button>
                    </div>
                </motion.div>

                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full border border-white/10 p-2">
                        <div className="w-full h-full rounded-full overflow-hidden relative transition-all duration-700">
                            <Image
                                src={profilePic}
                                alt="Profile"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="relative z-10 flex justify-center flex-wrap gap-6 md:gap-8 mt-10 md:mt-14 pb-6 text-gray-500"
            >
                <a href="https://github.com/SmaahPro" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-white cursor-pointer transition-colors text-xl" />
                </a>

                <a href="https://linkedin.com/in/SmaahPro" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="hover:text-blue-500 cursor-pointer transition-colors text-xl" />
                </a>

                <a href="https://x.com/SmaahPro" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="hover:text-white cursor-pointer transition-colors text-xl" />
                </a>

                <a href="https://facebook.com/SmaahPro" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="hover:text-blue-600 cursor-pointer transition-colors text-xl" />
                </a>

                <a href="https://instagram.com/SmaahPro" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors text-xl" />
                </a>
            </motion.div>

        </section>
    );
};

export default HeroSection;