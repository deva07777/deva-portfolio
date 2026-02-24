import React from "react";
import { IconSchool, IconCalendar, IconChartBar } from "@tabler/icons-react";

export const Education = () => {
    return (
        <div className="container mx-auto px-6 md:px-16 lg:px-0 pb-24 mt-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
                    Educational <span className="text-[#FF611D]">Background</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                    My academic journey and specialized training in AI and Machine Learning.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="relative group p-8 md:p-12 rounded-3xl border border-white/5 bg-[#1a1a1a] overflow-hidden transition-all duration-300 hover:border-[#FF611D]/20">
                    {/* Decorative Background Blob */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[#FF611D] opacity-[0.03] rounded-full blur-3xl group-hover:opacity-[0.07] transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="p-4 rounded-2xl bg-[#FF611D]/10 text-[#FF611D] shrink-0">
                            <IconSchool size={40} />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#FF611D] transition-colors">
                                    Coimbatore Institute of Technology
                                </h3>
                                <span className="px-4 py-1 rounded-full text-xs font-mono font-medium bg-white/5 text-gray-400 border border-white/5">
                                    Established 1956
                                </span>
                            </div>

                            <p className="text-xl text-gray-300 mb-6 font-medium">
                                Integrated Masters in Artificial Intelligence and Machine Learning
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <IconCalendar className="text-[#FF611D]" size={20} />
                                    <span>2023 — 2028 (3rd Year)</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <IconChartBar className="text-[#FF611D]" size={20} />
                                    <span>CGPA: <span className="text-white font-bold text-lg ml-1">7.505</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
