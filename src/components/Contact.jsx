"use client";

import React from "react";
import { Mail, MessageCircle, Zap } from "lucide-react";
import {
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa6";

const Contact = () => {
    return (
        <section id="contact" className="relative w-full min-h-[77vh] md:h-[77vh] bg-[#030014] text-white overflow-hidden flex items-center py-12 md:py-0">
            <div className="absolute top-20 left-10 w-40 h-40 border border-purple-500/10 rotate-45 rounded-3xl blur-[1px]" />
            <div className="absolute bottom-20 right-16 w-52 h-52 border border-blue-500/10 rounded-full" />

            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-6 w-full">
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-gray-200 text-3xl md:text-5xl font-extrabold">Lets Connect</h2>
                    <p className="text-gray-400 text-xs md:text-sm mt-2">Get in touch with me</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-4 md:space-y-5">
                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 md:p-5 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                            <div className="flex items-center gap-2 mb-2 md:mb-3">
                                <MessageCircle size={16} className="text-purple-400" />
                                <span className="text-purple-400 text-[10px] md:text-xs font-semibold">Open for Opportunities</span>
                            </div>
                            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                I'm always open to new opportunities, collaborations, and meaningful conversations. Whether you have a question, a project in mind, or just want to connect, feel free to reach out — my inbox is always open.
                            </p>
                        </div>
                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 md:p-4 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                            <div className="flex items-start gap-3">
                                <Zap size={18} className="text-purple-400 mt-0.5" />
                                <div>
                                    <p className="text-purple-400 text-sm md:text-sm font-semibold">For a faster reply,</p>
                                    <p className="text-gray-400 text-xs md:text-sm">please send a clear and concise message.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-3 md:p-4 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-purple-400" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-500 text-[10px] md:text-xs">Email</p>
                                    <a href="mailto:sheikhmuntaqimahmedalhasibcode@gmail.com" className="text-gray-300 text-[11px] md:text-sm hover:text-purple-400 transition break-all">
                                        sheikhmuntaqimahmedalhasibcode@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-3 md:p-4 backdrop-blur-xl hover:border-green-500/30 transition-all duration-300">
                            <div className="flex items-center gap-3">
                                <FaWhatsapp size={18} className="text-green-400" />
                                <div>
                                    <p className="text-gray-500 text-[10px] md:text-xs">WhatsApp</p>
                                    <a href="https://wa.me/8801234567890" target="_blank" className="text-gray-300 text-[11px] md:text-sm hover:text-green-400 transition">+880 1234 567890</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-12">
                    <a href="https://github.com/SmaahPro" target="_blank" className="text-gray-400 hover:text-white transition text-lg md:text-xl"><FaGithub /></a>
                    <a href="https://linkedin.com/in/SmaahPro" target="_blank" className="text-gray-400 hover:text-blue-500 transition text-lg md:text-xl"><FaLinkedinIn /></a>
                    <a href="https://x.com/SmaahPro" target="_blank" className="text-gray-400 hover:text-white transition text-lg md:text-xl"><FaXTwitter /></a>
                    <a href="https://facebook.com/SmaahPro" target="_blank" className="text-gray-400 hover:text-blue-600 transition text-lg md:text-xl"><FaFacebookF /></a>
                    <a href="https://instagram.com/SmaahPro" target="_blank" className="text-gray-400 hover:text-pink-500 transition text-lg md:text-xl"><FaInstagram /></a>
                    <a href="https://wa.me/8801234567890" target="_blank" className="text-gray-400 hover:text-green-500 transition text-lg md:text-xl"><FaWhatsapp /></a>
                </div>
            </div>
        </section>
    );
};
export default Contact;