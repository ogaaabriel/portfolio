import { ReactNode } from "react";

import Navbar from "./Navbar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-dark-blue bg-gradient text-white">
      <Navbar transparent={true} />
      <main className="home-container">
        <div className="p-4 p-sm-5">{children}</div>
      </main>
    </div>
  );
};

export default HomeLayout;
