import placeholder from "../img/placeholder.png";

interface Project {
  title: string;
  description: string;
  img: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Learning Logs",
    description:
      "Django app to help track learning. Create a list of topics you are studying, take notes and share it with other users.",
    img: placeholder,
    url: "https://github.com/ogaaabriel/learning_logs",
  },
  {
    title: "Tutorials API",
    description: "Django REST API to share links to tutorials",
    img: placeholder,
    url: "https://github.com/ogaaabriel/tutorials_api",
  },
  {
    title: "Em desenvolvimento",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: placeholder,
    url: "#",
  },
];

const Projects = (): JSX.Element => {
  return (
    <div className="bg-dark-blue p-4 p-sm-5 py-5">
      <div className="container">
        <h2 className="text-center text-light display-5 mb-4">
          Projetos Pessoais
        </h2>
        <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
          {projects.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Project = ({ project }: { project: Project }): JSX.Element => {
  return (
    <div className="card card-size">
      <div className="card-header p-0">
        <img src={project.img} />
      </div>
      <div className="card-body d-flex flex-column">
        <p className="h4">{project.title}</p>
        <p>{project.description}</p>
        <a
          className="btn btn-dark btn-sm text-light mt-auto"
          href={project.url}
          target="_blank"
        >
          Ver projeto
        </a>
      </div>
    </div>
  );
};

export default Projects;
