"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Code2, Wrench, Terminal } from "lucide-react";

const TechStack = () => {
    const skills = [
        {
            title: "Frontend Development",
            icon: <Layout className="text-blue-400" />,
            tags: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
            glow: "from-blue-500/20",
        },
        {
            title: "Backend Development",
            icon: <Server className="text-emerald-400" />,
            tags: ["Node.js", "Express.js", "Authentication"],
            glow: "from-emerald-500/20",
        },
        {
            title: "Databases & Cloud",
            icon: <Database className="text-purple-400" />,
            tags: ["MongoDB", "Vercel", "Netlify"],
            glow: "from-purple-500/20",
        },
        {
            title: "Programming Languages",
            icon: <Code2 className="text-orange-400" />,
            tags: ["JavaScript", "C"],
            glow: "from-orange-500/20",
        },
        {
            title: "Tools & Platforms",
            icon: <Wrench className="text-pink-400" />,
            tags: ["GitHub", "npm", "Vite"],
            glow: "from-pink-500/20",
        },
        {
            title: "Currently Learning",
            icon: <Terminal className="text-cyan-400" />,
            tags: ["C++", "DSA", "TypeScript"],
            glow: "from-cyan-500/20",
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12,
            },
        },
    };

    return (
        <section id="tech" className="relative min-h-screen py-17 px-7 text-white bg-[#030014] overflow-hidden">

            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[140px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-blue-600/10 blur-[140px] rounded-full" />

            <div className="relative max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight">
                        <span className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-2 text-xs md:text-base">
                        Tools & technologies I use to build scalable applications
                    </p>

                    <div className="mx-auto mt-4 h-[3px] w-24 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.8)]" />
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
                >
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative group flex"
                        >
                            <div
                                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.glow} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`}
                            />

                            <div className="relative w-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden flex flex-col">

                                <div className="flex items-center gap-4 mb-6 min-h-[60px]">
                                    <div className="relative shrink-0">
                                        <div className="absolute inset-0 bg-white/10 rounded-2xl blur-md scale-125 opacity-0 group-hover:opacity-100 transition" />
                                        <div className="relative p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition duration-300">
                                            {React.cloneElement(skill.icon, { size: 26 })}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                                        {skill.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-auto">
                                    {skill.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/50 hover:text-white transition-all duration-300 cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;