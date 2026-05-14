"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ExternalLink,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";


const allProjects = [
    {
        title: "QurbaniHat",
        description: "QurbaniHat is a modern web application designed to help users easily discover and book healthy cows, goats, sheep, and other livestock for Qurbani(Eid-ul-Adha sacrifice). The platform connects buyers with trusted and verified sellers across Bangladesh, making the process of finding the right animal simple, secure, and convenient for the holy occasion.",
        image: project1,
        tech: ["Next.js", "BetterAuth", "MongoDB"],
        live: "https://smaahqurbanihat.vercel.app",
        github: "https://github.com/SmaahPro/Assignment-8",
    },
    {
        title: "KeenKeeper",
        description: "KeenKeeper is a comprehensive web application designed to help users maintain meaningful relationships. It allows you to track interactions, monitor contact frequency, and manage your social network through a clean, responsive, and intuitive interface.",
        image: project2,
        tech: ["Next.js", "TailwindCSS"],
        live: "https://smaahkeenkeeper.vercel.app",
        github: "https://github.com/SmaahPro/Assignment-7",
    },
    {
        title: "DigiTools – Premium Digital Tools Platform",
        description: "A web application to explore, buy, and manage premium digital tools efficiently. Designed with React and Tailwind CSS, it provides a smooth, responsive experience across devices with interactive cart functionality and real-time alerts.",
        image: project3,
        tech: ["React", "TailwindCSS", "DaisyUI", "JavaScript"],
        live: "https://smaahdigitoolsplatform.netlify.app",
        github: "https://github.com/SmaahPro/Assignment-6",
    },
    {
        title: "KeenKeeper",
        description: "KeenKeeper is a comprehensive web application designed to help users maintain meaningful relationships. It allows you to track interactions, monitor contact frequency, and manage your social network through a clean, responsive, and intuitive interface.",
        image: project2,
        tech: ["Next.js", "TailwindCSS"],
        live: "https://smaahkeenkeeper.vercel.app",
        github: "https://github.com/SmaahPro/Assignment-7",
    },
    {
        title: "QurbaniHat",
        description: "QurbaniHat is a modern web application designed to help users easily discover and book healthy cows, goats, sheep, and other livestock for Qurbani(Eid-ul-Adha sacrifice). The platform connects buyers with trusted and verified sellers across Bangladesh, making the process of finding the right animal simple, secure, and convenient for the holy occasion.",
        image: project1,
        tech: ["Next.js", "BetterAuth", "MongoDB"],
        live: "https://smaahqurbanihat.vercel.app",
        github: "https://github.com/SmaahPro/Assignment-8",
    },
    {
        title: "KeenKeeper",
        description: "KeenKeeper is a comprehensive web application designed to help users maintain meaningful relationships. It allows you to track interactions, monitor contact frequency, and manage your social network through a clean, responsive, and intuitive interface.",
        image: project2,
        tech: ["Next.js", "TailwindCSS"],
        live: "https://smaahkeenkeeper.vercel.app",
        github: "https://github.com/SmaahPro/Assignment-7",
    },
    {
        title: "QurbaniHat",
        description: "QurbaniHat is a modern web application designed to help users easily discover and book healthy cows, goats, sheep, and other livestock for Qurbani(Eid-ul-Adha sacrifice). The platform connects buyers with trusted and verified sellers across Bangladesh, making the process of finding the right animal simple, secure, and convenient for the holy occasion.",
        image: project1,
        tech: ["Next.js", "BetterAuth", "MongoDB"],
        live: "https://smaahqurbanihat.vercel.app",
        github: "https://github.com/SmaahPro/Assignment-8",
    },
    {
        title: "KeenKeeper",
        description: "KeenKeeper is a comprehensive web application designed to help users maintain meaningful relationships. It allows you to track interactions, monitor contact frequency, and manage your social network through a clean, responsive, and intuitive interface.",
        image: project2,
        tech: ["Next.js", "TailwindCSS"],
        live: "https://smaahkeenkeeper.vercel.app",
        github: "https://github.com/SmaahPro/Assignment-7",
    },
    {
        title: "QurbaniHat",
        description: "QurbaniHat is a modern web application designed to help users easily discover and book healthy cows, goats, sheep, and other livestock for Qurbani(Eid-ul-Adha sacrifice). The platform connects buyers with trusted and verified sellers across Bangladesh, making the process of finding the right animal simple, secure, and convenient for the holy occasion.",
        image: project1,
        tech: ["Next.js", "BetterAuth", "MongoDB"],
        live: "https://smaahqurbanihat.vercel.app",
        github: "https://github.com/SmaahPro/Assignment-8",
    },
    {
        title: "KeenKeeper",
        description: "KeenKeeper is a comprehensive web application designed to help users maintain meaningful relationships. It allows you to track interactions, monitor contact frequency, and manage your social network through a clean, responsive, and intuitive interface.",
        image: project2,
        tech: ["Next.js", "TailwindCSS"],
        live: "https://smaahkeenkeeper.vercel.app",
        github: "https://github.com/SmaahPro/Assignment-7",
    },
];

const Projects = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const projectsPerPage = 3;

    const totalPages = Math.ceil(
        allProjects.length / projectsPerPage
    );

    const startIndex =
        (currentPage - 1) * projectsPerPage;

    const currentProjects = allProjects.slice(
        startIndex,
        startIndex + projectsPerPage
    );

    return (
        <section
            id="projects"
            className="relative w-full bg-[#030014] text-white overflow-hidden py-10 md:py-0"
        >

            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-6 w-full pt-12 md:pt-8 pb-16 md:pb-20">

                <div className="text-center mb-6 md:mb-7">

                    <h2 className="text-gray-200 text-3xl md:text-5xl font-extrabold">
                        Projects
                    </h2>

                    <p className="text-gray-400 text-xs md:text-sm mt-2 mb-10">
                        Some of my featured works & creative developments
                    </p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    {currentProjects.map((project, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col"
                        >

                            <div className="relative w-full h-[180px] overflow-hidden">

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />

                            </div>

                            <div className="p-5 flex flex-col flex-1">

                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">

                                    {project.tech.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] md:text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                                        >
                                            {item}
                                        </span>
                                    ))}

                                </div>

                                <div className="flex items-center gap-3 mt-auto">

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-xs md:text-sm font-medium"
                                    >
                                        <ExternalLink size={15} />
                                        Live
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 transition text-xs md:text-sm font-medium"
                                    >
                                        <FaGithub size={15} />
                                        GitHub
                                    </a>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

                <div className="flex items-center justify-center gap-4 mt-8 md:mt-10">

                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                prev > 1 ? prev - 1 : prev
                            )
                        }
                        className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div className="flex items-center gap-2">

                        {[...Array(totalPages)].map((_, index) => (

                            <button
                                key={index}
                                onClick={() =>
                                    setCurrentPage(index + 1)
                                }
                                className={`w-9 h-9 rounded-full text-sm font-medium transition ${currentPage === index + 1
                                    ? "bg-purple-600 text-white"
                                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                                    }`}
                            >
                                {index + 1}
                            </button>

                        ))}

                    </div>

                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                prev < totalPages
                                    ? prev + 1
                                    : prev
                            )
                        }
                        className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                    >
                        <ChevronRight size={18} />
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Projects;