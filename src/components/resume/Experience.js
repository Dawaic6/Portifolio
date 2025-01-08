import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Andela - (February_2024-December_2024)"
            des="I gained hands-on experience as a full-stack developer,
             enhancing my skills in both front-end and back-end development.
              I worked on real-world projects, improved my problem-solving abilities, 
            and learned best practices in software development, teamwork, and code collaboration."
          />
          <ResumeCard
            title="Network Engineer"
            subTitle="University of Rwanda - (2023 - 2024)"
            des=" I gained foundational knowledge in network protocols,
             IP addressing, routing, switching, and network security. 
             I learned how to design, implement, and troubleshoot network infrastructures
              to ensure efficient and secure communication."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technology Skills Instructor(DA)"
            subTitle="RISA (September_2023 - February_2024)"
            des=" I gained experience in managing and improving ICT infrastructure, 
            supporting digital transformation initiatives,
             and helping people become familiar with using various apps, such as Irembo."
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
