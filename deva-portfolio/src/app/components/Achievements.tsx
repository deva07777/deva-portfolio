"use client";
import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { IconCertificate, IconTrophy, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

type Certificate = {
    id: string;
    title: string;
    event?: string;
    achievement?: string;
    description: string;
    longDescription?: React.ReactNode;
    image: string;
    type: "winner" | "participation" | "certification";
};

const certificates: Certificate[] = [
    {
        id: "tech-sculpt-2025",
        title: "Tech Sculpt 2025",
        event: "IEEE Student Event",
        achievement: "1st Place Winner",
        description: "Won 1st place at Tech Sculpt 2025 (IEEE student event) for building an AI-powered portfolio manager that optimizes asset allocation using predictive analytics and intelligent decision models.",
        image: "/certificates/tech_sculpt.jpg", // Placeholder
        type: "winner"
    },
    {
        id: "glytch-netratax",
        title: "NETRATAX",
        event: "Glytch – 24 Hour Hackathon (VIT Chennai)",
        achievement: "Winner / Best Project",
        description: "Developed NETRATAX, a graph-based fraud detection system for GST transactions.",
        longDescription: (
            <div className="space-y-6 text-left">
                <div>
                    <h4 className="text-lg font-bold text-[#FF611D] mb-2">Problem NETRATAX Solves</h4>
                    <p className="text-gray-300 leading-relaxed">
                        Tax authorities struggle to detect sophisticated GST fraud schemes such as shell companies, circular trading, bogus ITC claims, and multi-layered invoice networks. Traditional rule-based systems and manual audits cannot analyze massive transaction volumes or uncover hidden multi-hop relationships. Fraud entities operate in interconnected rings that remain invisible in tabular data, leading to revenue loss and delayed detection.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-2">
                        NETRATAX transforms GST transactions into graph networks and applies Graph Neural Networks and pattern-detection algorithms to identify anomalies, suspicious clusters, and high-risk trading behaviors with high accuracy — enabling faster, data-driven, proactive fraud investigation.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-[#FF611D] mb-2">Challenges Faced</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Highly imbalanced fraud data (fraud cases were very small portion)</li>
                        <li>Building clean graph structures from noisy GST invoices</li>
                        <li>Resolving missing mappings and inconsistent company IDs</li>
                        <li>Optimizing GNN performance on large sparse networks</li>
                        <li>Preventing overfitting during training</li>
                        <li>Integrating ML pipeline with FastAPI backend</li>
                        <li>Connecting model inference to D3.js graph visualization</li>
                        <li>Designing intuitive fraud network visualization for auditors</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-[#FF611D] mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                        {["HTML", "React", "CSS", "JavaScript", "Flask", "Python", "PyTorch", "Neo4j", "Deep Neural Networks", "GitHub"].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        ),
        image: "/certificates/netratax.jpg", // Placeholder
        type: "winner"
    },
    {
        id: "tensorflow-cert",
        title: "TensorFlow Certification",
        event: "GeeksforGeeks",
        achievement: "Certification",
        description: "Completed TensorFlow certification covering neural networks, model building, optimization, and deep learning workflows.",
        image: "/certificates/tensorflow.jpg", // Placeholder
        type: "certification"
    },
    {
        id: "ineos-jio",
        title: "Ineos Jio Hackathon",
        achievement: "Winner",
        description: "Winner of Ineos Jio Hackathon for building a scalable technical solution under competitive time constraints.",
        image: "/certificates/ineos_jio.jpg", // Placeholder
        type: "winner"
    },
    {
        id: "shaastra-2026",
        title: "Shaastra 2026 – Flagship CTF",
        achievement: "Participation",
        description: "Participated in Shaastra 2026 flagship CTF, solving cybersecurity and cryptographic challenges under timed competition.",
        image: "/certificates/shaastra.jpg", // Placeholder
        type: "participation"
    },
    {
        id: "ciphermatics",
        title: "CipherMatics - ACN Flagship Event",
        event: "Amrita Cyber Nation (ACN)",
        achievement: "Finalist - Round 3 Qualifier",
        description: "Reached the final round of CipherMatics, a high-intensity CTF competition pushing limits in Cybersecurity, Cryptography, and Logical Puzzles.",
        longDescription: (
            <div className="space-y-6 text-left">
                <div>
                    <h4 className="text-lg font-bold text-[#FF611D] mb-2">Event Overview</h4>
                    <p className="text-gray-300 leading-relaxed">
                        Ciphermatics is a flagship event of Amrita Cyber Nation (ACN), a thrilling three-round competition designed to push participants beyond limits in Mathematics, Logical Puzzles, Cybersecurity, and Cryptography. I advanced to the <strong>Final Challenge (Round 3)</strong>, proving proficiency in investigating anomalies and breaking complex ciphers.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-[#FF611D] mb-2">Competition Stages</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li><strong>Round 1: Mind Maze:</strong> Solved high-speed mathematical puzzles and basic cryptography challenges under strict time limits.</li>
                        <li><strong>Round 2: Digital Hunt:</strong> A cybersecurity investigation challenge involving QR code analysis, anomaly detection, and digital evidence gathering from mysterious sources.</li>
                        <li><strong>Round 3: Cipher Crown (Final):</strong> The ultimate multi-layered challenge involving folder unlocking sequences, flag verification, and advanced cryptographic problem solving.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-[#FF611D] mb-2">Key Skills Demonstated</h4>
                    <div className="flex flex-wrap gap-2">
                        {["Cryptography", "Cyber Investigation", "Steganography", "Network Forensics", "Logical Reasoning", "Caesar/Vigenère Ciphers", "SHA-256", "Binary-Decimal Conversion"].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        ),
        image: "/certificates/ciphermatics.jpg", // Placeholder
        type: "participation"
    }
];

export const Achievements = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <div className="container mx-auto px-6 md:px-16 lg:px-0 pb-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Certifications & <span className="text-[#FF611D]">Achievements</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                    Recognition of my technical expertise and competitive programming journey.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                    <div key={cert.id} className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5 flex flex-col justify-between group hover:border-[#FF611D]/30 transition-all duration-300 relative overflow-hidden min-h-[300px]">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            {cert.type === 'winner' ? <IconTrophy size={100} /> : <IconCertificate size={100} />}
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={cn(
                                    "px-4 py-1.5 rounded-full text-xs font-mono font-medium border",
                                    cert.type === 'winner' ? "bg-[#FF611D]/10 text-[#FF611D] border-[#FF611D]/20" :
                                        cert.type === 'certification' ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                                            "bg-purple-500/10 text-purple-500 border-purple-500/20"
                                )}>
                                    {cert.achievement?.toUpperCase() || "ACHIEVEMENT"}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#FF611D] transition-colors">
                                {cert.title}
                            </h3>
                            {cert.event && <p className="text-sm text-gray-500 marginBottom-4 font-mono">{cert.event}</p>}

                            <p className="text-gray-400 leading-relaxed mt-4 text-sm line-clamp-3">
                                {cert.description}
                            </p>
                        </div>

                        <button
                            onClick={() => setSelectedCert(cert)}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-mono text-white hover:text-[#FF611D] transition-colors group/link relative z-10 self-start"
                        >
                            View Certificate
                            <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
                        </button>
                    </div>
                ))}
            </div>

            <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        </div>
    );
};

const CertificateModal = ({ cert, onClose }: { cert: Certificate | null, onClose: () => void }) => {
    useEffect(() => {
        if (cert) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [cert, onClose]);

    return (
        <AnimatePresence>
            {cert && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-[#1a1a1a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full hover:bg-black/80 text-white transition-colors"
                        >
                            <IconX size={20} />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-4 bg-grid-white/[0.02] relative min-h-[300px]">
                            <div className="relative w-full h-full min-h-[300px]">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-contain"
                                />

                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{cert.title}</h3>
                            <p className="text-[#FF611D] font-mono text-sm mb-6">{cert.event || cert.achievement}</p>

                            <div className="prose prose-invert max-w-none text-sm text-gray-300 overflow-y-auto custom-scrollbar pr-2">
                                <p className="mb-4">{cert.description}</p>
                                {cert.longDescription}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
