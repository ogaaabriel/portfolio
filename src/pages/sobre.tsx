import { ReactElement } from "react";

import Skills from "@/components/Skills";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="display-5 mb-4">Sobre mim</h2>
        <p className="lead fs-5">
          Sou um apaixonado pelo universo da programação. Estou diariamente
          estudando e praticando em busca de adquirir e aprimorar meus
          conhecimentos. Atualmente estou cursando análise e desenvolvimento de
          sistemas e me especializando em desenvolvimento backend.
        </p>
      </div>
      <Skills />
    </div>
  );
};

About.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default About;
