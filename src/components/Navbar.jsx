"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, User, Code, FolderGit2, GraduationCap, Mail } from "lucide-react";
import Image from "next/image";
import logoPic from "@/assets/logo.jpg";

const navLinks = [
    { name: "Home", id: "hero", icon: Home },
    { name: "About", id: "about", icon: User },
    { name: "Technologies", id: "tech", icon: Code },
    { name: "Projects", id: "projects", icon: FolderGit2 },
    { name: "Qualification", id: "qualification", icon: GraduationCap },
    { name: "Contact", id: "contact", icon: Mail },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("hero");
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });

        setOpen(false);
    };

    useEffect(() => {
        const sections = navLinks.map((l) =>
            document.getElementById(l.id)
        );

        const handleScrollSpy = () => {
            let current = "hero";

            sections.forEach((section) => {
                if (!section) return;

                const rect = section.getBoundingClientRect();
                const buffer = 150;

                if (rect.top <= buffer && rect.bottom >= buffer) {
                    current = section.id;
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScrollSpy);
        handleScrollSpy();
        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712] border-b border-white/10">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-20 py-4 md:py-5">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="cursor-pointer"
                    onClick={() => handleScroll("hero")}
                >
                    <div className="relative w-10 h-10 md:w-12 md:h-12">
                        <Image
                            src={logoPic}
                            alt="sMAAH Logo"
                            fill
                            className="object-contain rounded-full"
                            priority
                        />
                    </div>
                </motion.div>

                <div className="hidden md:flex gap-1 lg:gap-2 ml-4">
                    {navLinks.map((item, idx) => {
                        const Icon = item.icon;
                        const isActive = active === item.id;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05, duration: 0.3 }}
                                onClick={() => handleScroll(item.id)}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`px-3 lg:px-4 py-2 rounded-full transition-all duration-300 ${isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-300 hover:bg-blue-600/20 hover:text-white"
                                    }`}
                            >
                                <div className="flex items-center gap-1.5">
                                    <motion.div
                                        animate={{
                                            rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
                                            scale: isHovered ? 1.1 : 1
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Icon size={14} />
                                    </motion.div>
                                    <span className="text-sm font-medium">{item.name}</span>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                <button
                    className="md:hidden relative w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-[#030712] border-t border-white/10">
                    <div className="px-6 py-4 space-y-2">
                        {navLinks.map((item) => {
                            const Icon = item.icon;
                            const isActive = active === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleScroll(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive
                                        ? "bg-blue-600 text-white"
                                        : "text-gray-300 hover:bg-blue-600/20"
                                        }`}
                                >
                                    <Icon size={18} />
                                    <span className="flex-1 text-left font-medium">{item.name}</span>
                                    {isActive && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;