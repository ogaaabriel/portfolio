import { ReactNode } from "react";

import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-70">
      <Navbar />
      <main className="main-container p-4 p-sm-5">{children}</main>
    </div>
  );
};

export default Layout;
