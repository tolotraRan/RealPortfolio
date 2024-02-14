import React, { FC } from "react";
import skillsData from "../shared/skillsData.json";
import Image from 'next/image';

interface Skill {
  title: string;
  image: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  // Séparer les compétences en fonction de leur catégorie
  const languages = skills.filter(skill => ["HTML", "CSS", "JavaScript", "PHP", "C#"].includes(skill.title));
  const frameworks = skills.filter(skill => ["REACTJS", "Tailwind","Bootstrap", "NODE", "Express","LARAVEL"].includes(skill.title));
  const databases = skills.filter(skill => ["MYSQL", "POSTEGRESQL", "MONGODB"].includes(skill.title));
  const others = skills.filter(skill => !["HTML", "CSS", "JavaScript", "PHP", "C#", "REACTJS", "Tailwind", "Bootstrap", "NODE", "Express","LARAVEL", "MYSQL", "POSTEGRESQL", "MONGODB"].includes(skill.title));

  return (
    <div id="Skills" className="min-h-screen border-cyan-100 mb-56">
      <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
        <h1
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
          className="text-center text-3xl lg:text-4xl"
        >
          My skills & Knowledge
        </h1>
        <p
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="1"
          className="description text-lg text-center my-[30px]"
        >
          Technologies and languages that I use to make my product everyday
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 ml-8"> {/* Utilisation de la classe sm:grid-cols-4 pour spécifier que sur les écrans de taille mobile, il y aura 2 colonnes, et sur les écrans plus larges, il y aura 4 colonnes */}
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-y-4">
              <h2 className="text-xl font-bold mb-4 col-span-2">Languages</h2>
              {languages.map((skill, index) => (
                <div
                  key={`language-${index}`}
                  className="item flex flex-col items-center justify-around group"
                >
                  <Image
                    className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
                    src={`/Images/${skill.image}`} 
                    alt={skill.title}
                    width={60} 
                    height={60} 
                  />
                  <p className="text-center">{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-y-4">
              <h2 className="text-xl font-bold mb-4 col-span-2">Frameworks</h2>
              {frameworks.map((skill, index) => (
                <div
                  key={`framework-${index}`}
                  className="item flex flex-col items-center justify-around group"
                >
                  <Image
                    className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
                    src={`/Images/${skill.image}`} 
                    alt={skill.title}
                    width={60} 
                    height={60} 
                  />
                  <p className="text-center">{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-y-4">
              <h2 className="text-xl font-bold mb-4 col-span-2">Databases</h2>
              {databases.map((skill, index) => (
                <div
                  key={`database-${index}`}
                  className="item flex flex-col items-center justify-around group"
                >
                  <Image
                    className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
                    src={`/Images/${skill.image}`} 
                    alt={skill.title}
                    width={60} 
                    height={60} 
                  />
                  <p className="text-center">{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-y-4">
              <h2 className="text-xl font-bold mb-4 col-span-2">Others</h2>
              {others.map((skill, index) => (
                <div
                  key={`other-${index}`}
                  className="item flex flex-col items-center justify-around group"
                >
                  <Image
                    className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
                    src={`/Images/${skill.image}`} 
                    alt={skill.title}
                    width={60} 
                    height={60} 
                  />
                  <p className="text-center">{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Pass the skills data from the imported JSON file to the Skills component
const SkillsContainer: FC = () => {
  return <Skills skills={skillsData} />;
};

export default SkillsContainer;
