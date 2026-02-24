import { Timeline } from "../components/timeline";
import Image from "next/image";

export const About = () => {
  const data = [
    {
      title: "2025 - Present",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Currently building reliable, production-ready software and AI systems
            with an emphasis on clarity, performance, and real-world usability.
          </p>
          <div className="mb-8 font-medium space-y-3">
            <div className="text-sm md:text-md font-mono">
              🏆 Led and contributed to winning technical and hackathon projects by delivering complete, working solutions
            </div>
            <div className="text-sm md:text-md font-mono">
              🤖 Built machine learning and AI-driven applications beyond experimentation, focusing on practical implementation
            </div>
            <div className="text-sm md:text-md font-mono">
              📊 Prioritized solving real-world problems over building surface-level demos
            </div>
            <div className="text-sm md:text-md font-mono">
              ⚙️ Strengthened understanding of system design, scalability, and clean architecture
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Strengthened foundations in software engineering, machine learning,
            and data systems through consistent project building.
          </p>
          <div className="mb-8 font-medium space-y-3">
            <div className="text-sm md:text-md font-mono">
              🧠 Implemented ML models using Python and Scikit-learn with focus on evaluation and validation
            </div>
            <div className="text-sm md:text-md font-mono">
              📈 Developed predictive systems using structured data and statistical techniques
            </div>
            <div className="text-sm md:text-md font-mono">
              🛠️ Built backend and full-stack applications integrating APIs and databases
            </div>
            <div className="text-sm md:text-md font-mono">
              🔍 Improved problem-solving skills through algorithms and data structures practice
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Began learning programming with a focus on computational thinking
            and structured problem solving.
          </p>
          <div className="mb-8 font-medium space-y-3">
            <div className="text-sm md:text-md font-mono">
              🐍 Adopted Python as primary language and built foundational projects
            </div>
            <div className="text-sm md:text-md font-mono">
              📚 Developed strong fundamentals in algorithms, mathematics, and statistics
            </div>
            <div className="text-sm md:text-md font-mono">
              💡 Built consistency through daily coding and structured learning
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-24 lg:pt-34">
        <h1 className="font-bold text-[30px]">ABOUT ME</h1>
        <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
          CODE.EAT.SLEEP.REPEAT
        </h2>

        <div className="relative mt-8 mb-8">
          <Image
            src="/profile.png"
            alt="Devadhatthan L profile picture"
            width={300}
            height={300}
            className="rounded-full object-cover object-center w-40 h-40 md:w-60 md:h-60"
            priority
          />
        </div>

        <Timeline data={data} />
      </div>
    </div>
  );
};
