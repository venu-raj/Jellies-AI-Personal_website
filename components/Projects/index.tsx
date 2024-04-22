"use client";
import React from "react";
import featuresData from "./projectsData";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "../Blog/BlogItem";

const Projects = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="projects" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "OUR RECENT PROJECTS",
              subtitle: "Explore Our recent projects",
              description: `Our team creates special solutions to solve your problems`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <BlogItem blog={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Projects;
