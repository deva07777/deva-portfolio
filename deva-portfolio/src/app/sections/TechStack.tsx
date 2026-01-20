import ScrollVelocity from "../components/scrollvelocity";

export default function TechStack() {
  return (
    <div className="pt-10 md:pt-15">
      <ScrollVelocity
        texts={[
          "<Python> <Software Engineering> <Machine Learning> <Data Science> <AI>",
          "[Software] [Machine Learning] [Data Science] [AI Systems] [Problem Solving] [Data Analysis] [Data Visualization] [Cybersecurity]",
        ]}
        velocity={80}
        parallaxClassName="parallax"
        scrollerClassName="scroller"
      />
    </div>
  );
}