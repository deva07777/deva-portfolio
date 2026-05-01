import React from "react";
import { FeaturedProject } from "../sections/FeaturedProject";
import AnimatedContent from "../components/animatedcontent";

export default function MyProjects() {
  return (
    <div className="pt-24 min-h-screen">
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
        <div className="container mx-auto px-6 md:px-12">
          <FeaturedProject />
        </div>
      </AnimatedContent>
    </div>
  );
}
