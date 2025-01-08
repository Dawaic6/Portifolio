import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="App Development"
          des="I design and develop user-friendly mobile and web applications tailored to client needs.
           My expertise includes UI/UX design, full-stack development, and integrating APIs for seamless functionality. "
          icon={<AiFillAppstore />}
        />
        
        <Card
          title="UI/UX Design"
          des="I create user-friendly UI designs and intuitive UX solutions, 
          combining functionality with visual appeal to meet user and business needs."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="I provide reliable hosting solutions to ensure your applications are secure,
           fast, and always accessible."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features