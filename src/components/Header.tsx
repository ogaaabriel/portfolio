const Header = (): JSX.Element => {
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center text-center bg-gradient bg-dark-blue text-light p-4"
      id="inicio"
    >
      <div>
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
    </div>
  );
};

export default Header;
