import placeholder from "../img/placeholder.png";
import learningLogs from "../img/learning_logs.webp";
import tutorialsApi from "../img/tutorialsApi.png";
import bookLoanManager from "../img/book_loan_manager.jpg";

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
      "Aplicativo Django para fazer anotações sobre tópicos de estudo",
    img: learningLogs,
    url: "https://github.com/ogaaabriel/learning_logs",
  },
  {
    title: "Book Loan Manager",
    description:
      "Aplicativo Django para realizar o gerencimento de empréstimos de livros.",
    img: bookLoanManager,
    url: "https://github.com/ogaaabriel/book_loan_manager",
  },
  {
    title: "Tutorials API",
    description:
      "API construída com Django REST para compartilhar links para tutoriais.",
    img: tutorialsApi,
    url: "https://github.com/ogaaabriel/tutorials_api",
  },
];

const Projects = (): JSX.Element => {
  return (
    <div className="p-4 p-sm-5 py-5 vh-min-100 d-flex align-items-center bg-dark-blue bg-gradient" id="projetos">
      <div className="container">
        <h2 className="text-center display-5 mb-5 text-white">
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
