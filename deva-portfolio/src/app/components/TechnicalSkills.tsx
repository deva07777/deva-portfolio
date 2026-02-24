import React from "react";
import { cn } from "../lib/utils";
import {
    IconCode,
    IconLayersIntersect,
    IconBrain,
    IconDatabase,
    IconTerminal2,
    IconSettings
} from "@tabler/icons-react";

type SkillCategory = {
    title: string;
    icon: React.ReactNode;
    skills: string[];
    color: string;
};

const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        icon: <IconCode className="w-6 h-6" />,
        skills: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "HTML/CSS"],
        color: "from-blue-500/20 to-blue-600/5",
    },
    {
        title: "Frameworks & Web",
        icon: <IconLayersIntersect className="w-6 h-6" />,
        skills: ["React.js", "Next.js", "FastAPI", "Flask", "Node.js", "Tailwind CSS"],
        color: "from-green-500/20 to-green-600/5",
    },
    {
        title: "ML & Data Science",
        icon: <IconBrain className="w-6 h-6" />,
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "NetworkX", "LLMs"],
        color: "from-[#FF611D]/20 to-[#FF611D]/5",
    },
    {
        title: "Databases & Tools",
        icon: <IconDatabase className="w-6 h-6" />,
        skills: ["PostgreSQL", "Neo4j", "MongoDB", "Redis", "Pinecone (Vector DB)"],
        color: "from-purple-500/20 to-purple-600/5",
    },
    {
        title: "DevOps & Cloud",
        icon: <IconSettings className="w-6 h-6" />,
        skills: ["Docker", "Git/GitHub", "AWS", "Vercel", "Linux"],
        color: "from-amber-500/20 to-amber-600/5",
    },
    {
        title: "Cybersecurity",
        icon: <IconTerminal2 className="w-6 h-6" />,
        skills: ["CTF", "Cryptography", "Network Security", "Digital Forensics"],
        color: "from-red-500/20 to-red-600/5",
    }
];

export const TechnicalSkills = () => {
    return (
        <div className="container mx-auto px-6 md:px-16 lg:px-0 pb-24 mt-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
                    Technical <span className="text-[#FF611D]">Expertise</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                    A comprehensive look at the languages, libraries, and tools I use to build intelligent systems.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "relative group p-8 rounded-3xl border border-white/5 bg-[#1a1a1a] overflow-hidden transition-all duration-300 hover:border-white/10"
                        )}
                    >
                        {/* Background Gradient */}
                        <div className={cn(
                            "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                            category.color
                        )} />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-white/5 text-[#FF611D] group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-[#FF611D] transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 text-gray-400 border border-white/5 hover:border-[#FF611D]/30 hover:text-white transition-all duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
