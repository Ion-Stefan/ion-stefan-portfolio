import React from "react";
import { IndividualProject } from "./IndividualProject";
import { IndividualProjectReversed } from "./IndividualProjectReversed";

export const FeaturedProjectsSection = () => {
  return (
    <div className="w-[90vw] min-h-[100vh] ml-2 md:ml-8 text-xl mb-[32px] mt-[16px] md:mt-[64px] lg:text-4xl">
      <p className="text-[#c3c3c3] font-mono">WORK:</p>
      <p className="text-[#f5f5f5] font-mono">
        I love creating applications that serve an educational purpose.
      </p>
      <p className="text-[#f5f5f5] font-mono">
        Here are some projects that I really enjoyed working on:
      </p>
      <IndividualProject />
      <IndividualProjectReversed />
    </div>
  );
};
