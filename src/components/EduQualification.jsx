"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Award } from "lucide-react";

const Qualification = () => {

    const education = [
        {
            degree: "Higher Secondary Certificate",
            year: "2025",
            institution: "Dhaka College",
            group: "Science",
            result: "GPA 4.67",
            side: "right",
        },
        {
            degree: "Secondary School Certificate",
            year: "2023",
            institution: "",
            group: "Science",
            result: "GPA 5.00",
            side: "left",
        },
        {
            degree: "Primary Education Completion",
            year: "2017",
            institution: "Protishruti Kindergarten & School",
            group: "Primary Education",
            result: "GPA 5.00",
            side: "right",
        },
    ];

    const geometricShapes = [
        { type: "triangle", size: 60, top: "10%", left: "5%", delay: 0, duration: 20 },
        { type: "square", size: 40, top: "70%", left: "85%", delay: 2, duration: 18 },
        { type: "circle", size: 30, top: "85%", left: "10%", delay: 1, duration: 15 },
        { type: "diamond", size: 50, top: "15%", left: "88%", delay: 3, duration: 22 },
        { type: "hexagon", size: 35, top: "45%", left: "93%", delay: 0.5, duration: 17 },
        { type: "triangle", size: 25, top: "55%", left: "3%", delay: 2.5, duration: 19 },
        { type: "circle", size: 20, top: "30%", left: "95%", delay: 1.5, duration: 14 },
        { type: "square", size: 45, top: "90%", left: "20%", delay: 3.5, duration: 21 },
    ];

    return (
        <section
            id="qualification"
            className="relative w-full min-h-screen md:min-h-[92vh] bg-[#030014] text-white overflow-hidden flex items-center py-10 md:py-0"
        >

            <div className="hidden md:block">
                {geometricShapes.map((shape, idx) => (
                    <motion.div
                        key={idx}
                        className="absolute"
                        style={{
                            top: shape.top,
                            left: shape.left,
                            width: shape.size,
                            height: shape.size,
                        }}
                        animate={{
                            y: [0, -30, 0, 30, 0],
                            x: [0, 20, 0, -20, 0],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: shape.duration,
                            delay: shape.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {shape.type === "triangle" && (
                            <div className="w-full h-full">
                                <div
                                    className="border-l-transparent border-r-transparent border-b-purple-500/30"
                                    style={{
                                        width: 0,
                                        height: 0,
                                        borderLeftWidth: shape.size / 2,
                                        borderRightWidth: shape.size / 2,
                                        borderBottomWidth: shape.size
                                    }}
                                />
                            </div>
                        )}
                        {shape.type === "square" && (
                            <div className="w-full h-full border-2 border-purple-500/30 rotate-12" />
                        )}
                        {shape.type === "circle" && (
                            <div className="w-full h-full rounded-full border-2 border-purple-500/30" />
                        )}
                        {shape.type === "diamond" && (
                            <div className="w-full h-full border-2 border-purple-500/30 rotate-45" />
                        )}
                        {shape.type === "hexagon" && (
                            <div className="w-full h-full bg-purple-500/20" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[130px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-blue-600/10 blur-[130px] rounded-full" />

            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:55px_55px]" />

            <div className="relative max-w-5xl mx-auto w-full px-5 md:px-8 py-10 md:py-10">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                        Qualification
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm mt-2">
                        My Academic Journey
                    </p>
                </motion.div>

                <div className="relative">

                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10 hidden md:block" />

                    <div className="absolute left-[30px] top-0 w-[2px] h-full bg-white/10 md:hidden" />

                    <div className="space-y-6 md:space-y-7">

                        {education.map((item, index) => {
                            const isLeft = item.side === "left";

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >

                                    <div className="md:hidden relative pl-[50px]">

                                        <div className="absolute left-[22px] top-1/2 -translate-y-1/2">
                                            <div className="relative flex items-center justify-center">
                                                <div className="w-3.5 h-3.5 rounded-full bg-purple-500 z-10" />
                                                <div className="absolute w-6 h-6 rounded-full bg-purple-500/20 animate-ping" />
                                            </div>
                                        </div>

                                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                                            <h3 className="text-sm font-bold leading-snug text-white">
                                                {item.degree}, {" "}
                                                <span className="text-purple-400">
                                                    {item.year}
                                                </span>
                                            </h3>
                                            <p className="text-gray-300 text-xs mt-2 font-medium">
                                                {item.institution}
                                            </p>
                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center gap-1 text-gray-400 text-[11px]">
                                                    <CalendarDays size={12} />
                                                    {item.group}
                                                </div>
                                                <div className="flex items-center gap-1 text-purple-400 text-[11px] font-semibold">
                                                    <Award size={12} />
                                                    {item.result}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`hidden md:block w-[44%] ${isLeft ? 'mr-auto' : 'ml-auto'} relative`}>
                                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                                            <h3 className="text-sm md:text-base font-bold leading-snug text-white">
                                                {item.degree}, {" "}
                                                <span className="text-purple-400">
                                                    {item.year}
                                                </span>
                                            </h3>
                                            <p className="text-gray-300 text-xs md:text-sm mt-2 font-medium">
                                                {item.institution}
                                            </p>
                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center gap-1 text-gray-400 text-[11px] md:text-xs">
                                                    <CalendarDays size={12} />
                                                    {item.group}
                                                </div>
                                                <div className="flex items-center gap-1 text-purple-400 text-[11px] md:text-xs font-semibold">
                                                    <Award size={12} />
                                                    {item.result}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`absolute top-1/2 ${isLeft ? "-right-[30px]" : "-left-[30px]"} -translate-y-1/2`}>
                                            <div className="relative flex items-center justify-center">
                                                <div className="w-3 h-3 rounded-full bg-purple-500 z-10" />
                                                <div className="absolute w-5 h-5 rounded-full bg-purple-500/20 animate-ping" />
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Qualification;