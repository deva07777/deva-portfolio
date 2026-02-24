import React from "react";
import Image from "next/image";
import AnimatedContent from "../components/animatedcontent";
import GitHubCalendar from "react-github-calendar";
import LeetCodeCalendar from "../components/LeetCodeCalendar";
import { Achievements } from "../components/Achievements";
import { TechnicalSkills } from "../components/TechnicalSkills";
import { Education } from "../components/Education";
import { Extracurriculars } from "../components/Extracurriculars";

const AboutPage = () => {
  return (
    <div>
      <div className="relative font-mono">
        <div className="container mx-auto px-10 md:px-15 lg:px-12 pt-28 lg:pt-40">
          <AnimatedContent
            distance={10}
            direction="vertical"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            {/* Main Content */}
            <h1 className="text-5xl font-bold mb-12">
              Hi, I&apos;m Deva!
            </h1>
          </AnimatedContent>

          {/* Image section - shows at top on sm and md screens */}
          <AnimatedContent
            distance={10}
            direction="horizontal"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="block lg:hidden mb-8">
              <div className="flex justify-center">
                <div className="relative w-60 h-60 md:w-80 md:h-80">
                  <div className="overflow-hidden rounded-full w-full h-full relative">
                    <Image
                      src="/profile.png"
                      alt="Deva L profile picture"
                      fill
                      className="rounded-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-16 mb-16">
            {/* Text section */}
            <AnimatedContent
              distance={10}
              direction="horizontal"
              reverse={false}
              config={{ tension: 70, friction: 13 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="lg:max-w-4xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-medium mb-4">
                    A{" "}
                    <span className="text-[#FF611D]">
                      systems-focused engineer
                    </span>{" "}
                    working at the intersection of{" "}
                    <span className="text-[#FF611D]">software</span>,{" "}
                    <span className="text-[#FF611D]">
                      machine learning
                    </span>{" "}
                    and{" "}
                    <span className="text-[#FF611D]">data</span>.
                  </h2>
                  <p className="mb-8">
                    I am driven by a strong interest in building{" "}
                    <span className="text-[#FF611D]">intelligent</span>,{" "}
                    <span className="text-[#FF611D]">reliable</span> systems that
                    solve real-world problems. My work spans software
                    engineering, machine learning, and data-driven applications,
                    with a focus on robust system design and performance.
                  </p>
                </div>

                <p className="mb-4">
                  I have hands-on experience designing{" "}
                  <span className="text-[#FF611D]">ML-powered systems</span>,{" "}
                  <span className="text-[#FF611D]">
                    privacy-preserving models
                  </span>
                  , and{" "}
                  <span className="text-[#FF611D]">
                    context-aware recommendation engines
                  </span>
                  . I enjoy working on problems that require both algorithmic
                  reasoning and practical engineering trade-offs.
                </p>

                <p>
                  I am particularly interested in building{" "}
                  <span className="text-[#FF611D]">scalable</span>,{" "}
                  <span className="text-[#FF611D]">explainable</span>, and{" "}
                  <span className="text-[#FF611D]">
                    production-ready AI systems
                  </span>
                  . Whether it&apos;s architecting agentic pipelines, optimizing
                  inference latency, or designing clean APIs, I focus on
                  clarity, correctness, and long-term maintainability.
                </p>

                <div className="mb-8"></div>
              </div>
            </AnimatedContent>

            {/* Image section - only visible on lg screens */}
            <AnimatedContent
              distance={200}
              direction="horizontal"
              reverse={false}
              config={{ tension: 70, friction: 13 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="hidden lg:block">
                <div className="flex justify-end">
                  <div className="relative w-60 h-60 md:w-80 md:h-80">
                    <div className="overflow-hidden rounded-full w-full h-full relative">
                      <Image
                        src="/profile.png"
                        alt="Devadhatthan L profile picture"
                        fill
                        className="rounded-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* Education Section */}
          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
          >
            <Education />
          </AnimatedContent>

          {/* Technical Skills Section */}
          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
          >
            <TechnicalSkills />
          </AnimatedContent>
        </div>
      </div>

      {/* GitHub Contributions */}
      <div className="container mx-auto px-10 md:px-16 lg:px-0 pb-12">
        <div className="text-center mb-4 text-xl font-semibold">
          My GitHub contributions
        </div>
        <div className="flex justify-center">
          <GitHubCalendar
            username="deva07777"
            theme={{
              dark: ["#333333", "#FF611D"],
            }}
            style={{
              font: "14px JetBrains Mono",
            }}
          />
        </div>
      </div>

      {/* LeetCode Contributions */}
      <div className="container mx-auto px-10 md:px-16 lg:px-0 pb-12">
        <div className="text-center mb-4 text-xl font-semibold">
          My LeetCode submissions
        </div>
        <div className="flex justify-center">
          <LeetCodeCalendar username="Deva__07" />
        </div>
      </div>

      {/* Achievements & Certifications */}
      <Achievements />

      {/* Extracurricular Activities */}
      <AnimatedContent
        distance={20}
        direction="vertical"
        reverse={false}
        config={{ tension: 70, friction: 13 }}
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.1}
      >
        <Extracurriculars />
      </AnimatedContent>
    </div>
  );
};

export default AboutPage;
