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
            tags: ["GitHub", "npm", "Vite", "Figma", "VS Code"],
            glow: "from-pink-500/20",
        },
        {
            title: "Currently Learning",
            icon: <Terminal className="text-cyan-400" />,
            tags: ["C++", "DSA", "TypeScript"],
            glow: "from-cyan-500/20",
        },
    ];

    return (
        <section
            id="tech"
            className="relative w-full min-h-[90vh] flex items-center bg-[#030014] text-white overflow-hidden"
        >

            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[140px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-blue-600/10 blur-[140px] rounded-full" />

            <div className="relative w-full max-w-6xl mx-auto px-4 md:px-7 pt-10 pb-12">

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-12"
                >
                    <h2 className="text-gray-200 text-3xl md:text-5xl font-extrabold">
                        Technologies
                    </h2>

                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        Tools & technologies I use to build projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">

                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="relative group"
                        >

                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.glow} opacity-0 group-hover:opacity-100 blur-2xl transition`} />

                            <div className="relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-full">

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-xl bg-white/5">
                                        {React.cloneElement(skill.icon, { size: 22 })}
                                    </div>

                                    <h3 className="font-semibold">
                                        {skill.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {skill.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default TechStack;