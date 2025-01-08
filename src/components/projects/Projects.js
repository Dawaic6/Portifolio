import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Business Card"
          des=" I designed a professional business card of business wokers, focusing on clean aesthetics, 
          brand consistency, and clear contact details to leave a lasting impression.     
          " 
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" I worked on e-commerce project where I developed scalable platform with a user-friendly interface,
           enhancing the online shopping experience and driving sales growth.      
           "
          src={projectTwo}
        />
       
        <ProjectsCard
          title="Management App"
          des=" My teammates and I developed a company management. 
          It streamlines company operations by managing tasks, 
          tracking performance, and fostering team collaboration, all in one platform."
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" I worked on an e-commerce project where I developed a scalable 
          platform with secure payment integration and a user-friendly interface, 
          enhancing the online shopping experience and driving sales growth.
             "
          src={projectTwo}
        />
       
      </div>
    </section>
  );
}

export default Projects