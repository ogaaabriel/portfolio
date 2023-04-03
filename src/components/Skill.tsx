import Image from "next/image";

import { Skill as SkillType } from "@/types";

const Skill = ({ skill }: { skill: SkillType }) => {
  return (
    <div className="badge">
      <Image src={skill.url} alt={skill.title} width={150} height={55} />
    </div>
  );
};

export default Skill;
