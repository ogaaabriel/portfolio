import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navigation from "react-bootstrap/Navbar";

const Navbar = ({ transparent = false }: { transparent?: boolean }) => {
  return (
    <>
      <Navigation
        expand="lg"
        className={
          "px-5 py-3 fixed-top" +
          ((!transparent && " navbar-light bg-light shadow-sm") ||
            " navbar-dark")
        }
      >
        <Link className="navbar-brand" href={"/"}>
          Gabriel Rodrigues
        </Link>
        <Navigation.Toggle aria-controls="basic-navbar-nav" />
        <Navigation.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href={"/sobre"}>
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/projetos"}>
                Projetos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/contato"}>
                Contato
              </Link>
            </li>
          </Nav>
        </Navigation.Collapse>
      </Navigation>
    </>
  );
};

export default Navbar;
