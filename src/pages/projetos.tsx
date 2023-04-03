import { ReactElement } from "react";
import { projects } from "@/data";
import Project from "@/components/Project";

import ProjectsLayout from "@/components/ProjectsLayout";

const Projects = () => {
  return (
    <div>
      <h2 className="text-center display-5 mb-5">Projetos Pessoais</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

Projects.getLayout = (page: ReactElement) => {
  return <ProjectsLayout>{page}</ProjectsLayout>;
};

export default Projects;
