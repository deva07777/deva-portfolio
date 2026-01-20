
import { Timeline } from "../components/timeline";
import Image from "next/image";

export const About = () => {
  const data = [
    {
      title: "2025 - Present",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Focused on building production-ready software and AI systems.
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              Highlights:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🏆 Winner of multiple technical and hackathon events
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🤖 Built ML, data science, and AI-driven applications
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              📊 Strong focus on real-world problem solving and real-world applications
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
            Explored software engineering, machine learning, and data science deeply.
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              Highlights:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🧠 Built ML models using Python and Scikit-learn
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              📈 Worked on data-driven predictive systems
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🛠️ Developed full-stack and backend software projects
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
            Started my programming journey.
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              Highlights:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🐍 Python as primary language
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              📚 Strong foundations in algorithms, mathematics and statistics
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
            src="/profile.jpg"
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
