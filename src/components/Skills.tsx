import { skills } from "@/data";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div>
      <h2 className="text-center mb-4 display-5">Habilidades</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.title} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
