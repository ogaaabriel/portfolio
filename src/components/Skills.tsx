interface Skill {
  title: string;
  url: string;
}

const skills: Skill[] = [
  {
    title: "HTML",
    url: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  },
  {
    title: "CSS",
    url: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  },
  {
    title: "Bootstrap",
    url: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  },
  {
    title: "JavaScript",
    url: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  },
  {
    title: "TypeScript",
    url: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  },
  {
    title: "Python",
    url: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  },
  {
    title: "React",
    url: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  },
  {
    title: "Express",
    url: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  },
  {
    title: "Django",
    url: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
  },
  {
    title: "Django REST",
    url: "https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray",
  },
];

const Skills = (): JSX.Element => {
  return (
    <div className="container p-4 p-sm-5 py-5">
      <h2 className="text-center mb-4 display-5">Minhas Habilidades</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.title} />
        ))}
      </div>
    </div>
  );
};

const Skill = ({ skill }: { skill: Skill }): JSX.Element => {
  return (
    <div className="badge">
      <img src={skill.url} alt={skill.title} />
    </div>
  );
};

export default Skills;
