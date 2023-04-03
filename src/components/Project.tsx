import Image from "next/image";

import { Project } from "@/types";

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="card card-size">
      <div className="card-header p-0">
        <Image src={project.img} alt={project.title} width={300} height={200} />
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

export default Project;
