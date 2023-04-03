import { ReactElement } from "react";

import { NextPageWithLayout } from "@/types";
import HomeLayout from "@/components/HomeLayout";

const Home: NextPageWithLayout = () => {
  return (
    <div className="text-center">
      <h1 className="display-2">Gabriel Rodrigues</h1>
      <h2 className="display-4">Desenvolvedor de software</h2>
      <div className="fs-2">
        <a
          className="me-3"
          href="https://github.com/ogaaabriel"
          target="_blank"
        >
          <i className="bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ogaaabriel/" target="_blank">
          <i className="bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
