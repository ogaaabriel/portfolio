import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = (): JSX.Element => {
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
    <Navbar
      fixed="top"
      expand="lg"
      className={(navDark && "bg-dark") + " navbar-dark px-5"}
    >
      <Navbar.Brand href="#inicio">Gabriel Rodrigues</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link active={false} href="#sobre">
            Sobre
          </Nav.Link>
          <Nav.Link active={false} href="#projetos">
            Projetos
          </Nav.Link>
          <Nav.Link active={false} href="#contato">
            Contato
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
