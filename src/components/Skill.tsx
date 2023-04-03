import { Skill as SkillType } from "@/types";

const Skill = ({ skill }: { skill: SkillType }) => {
  return (
    <div className="badge">
      <img src={skill.url} alt={skill.title} />
    </div>
  );
};

export default Skill;
