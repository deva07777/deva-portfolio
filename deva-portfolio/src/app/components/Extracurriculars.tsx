"use client";
import React from "react";
import { IconBallFootball, IconCricket, IconRun } from "@tabler/icons-react";
import { motion } from "motion/react";

type Activity = {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    tags: string[];
};

const activities: Activity[] = [
    {
        id: "football",
        title: "Football & Competitive Play",
        description:
            "Team-based competitive football focusing on discipline, endurance, and strategic coordination on the field.",
        tags: ["Strategy", "Endurance", "Teamwork"],
        icon: <IconBallFootball className="w-7 h-7" />,
    },
    {
        id: "cricket",
        title: "Cricket",
        description:
            "Active participation in team cricket, emphasizing tactical thinking, high-pressure consistency, and precision.",
        icon: <IconCricket className="w-7 h-7" />,
        tags: ["Tactics", "Focus", "Consistency"],
    },
    {
        id: "strava",
        title: "Endurance Training (Strava)",
        description:
            "Regularly tracking runs and fitness performance via Strava, maintaining structured and measurable physical discipline.",
        icon: <IconRun className="w-7 h-7" />,
        tags: ["Data-Driven", "Discipline", "Persistence"],
    },
];

export const Extracurriculars = () => {
    return (
        <div className="container mx-auto px-6 md:px-16 lg:px-0 pb-24 mt-16">
            {/* Heading */}
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans uppercase tracking-tight">
                    Beyond <span className="text-[#FF611D]">The Code</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                    Maintaining physical discipline and strategic thinking through sports
                    and endurance training.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {activities.map((activity, index) => (
                    <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="group relative p-8 rounded-3xl border border-white/5 bg-[#1a1a1a] 
            transition-all duration-500 hover:border-[#FF611D]/40 hover:bg-[#1e1e1e] 
            flex flex-col items-center text-center overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF611D]/20 via-transparent to-[#FF611D]/20 blur-xl" />
                        </div>

                        {/* Accent Line */}
                        <div className="absolute top-0 left-0 h-1 w-0 bg-[#FF611D] transition-all duration-500 group-hover:w-full" />

                        {/* Icon */}
                        <div
                            className="p-4 rounded-full bg-[#FF611D]/10 text-[#FF611D] 
              group-hover:bg-[#FF611D] group-hover:text-black 
              transition-all duration-500 mb-6 
              group-hover:rotate-6 group-hover:scale-110"
                        >
                            {activity.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FF611D] transition-colors duration-300">
                            {activity.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            {activity.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {activity.tags.map((tag, tIdx) => (
                                <span
                                    key={tIdx}
                                    className="px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider 
                  bg-white/5 text-gray-500 border border-white/5 
                  transition-all duration-300 
                  group-hover:border-[#FF611D]/40 group-hover:text-[#FF611D]"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};