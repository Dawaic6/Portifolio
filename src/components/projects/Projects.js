import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,mobileProject,project4 } from "../../assets/index";
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
          title="NRC's official website"
          des="I developed the official website for the Nursing Research Club (NRC), focusing on creating a professional and informative platform. The website includes features such as announcements, publications, team details, and a blog section, providing users with easy access 
          to the latest updates and resources while maintaining a clean and user-friendly design."
          src={project4}
        />
         <ProjectsCard
          title="QuickAid"
          des="I developed a mobile application using Flutter and Dart, designed to provide emergency assistance with features like ambulance calling, emergency contacts, and locating nearby hospitals. The app offers a user-friendly
           interface and ensures quick access to critical services, enhancing emergency response efficiency."
          src={mobileProject}
        />
       
      </div>
    </section>
  );
}

export default Projects