import React from "react";

const Navbar = (): JSX.Element => {
  const [navDark, setNavDark] = React.useState(window.scrollY > 100);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setNavDark(true);
      } else {
        setNavDark(false);
      }
    });
  });

  return (
    <nav
      className={
        (navDark && "bg-dark") +
        " navbar navbar-dark navbar-expand-lg px-5 fixed-top"
      }
    >
      <a className="navbar-brand" href="#inicio">
        Gabriel Rodrigues
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#sobre">
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projetos">
              Projetos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contato">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
