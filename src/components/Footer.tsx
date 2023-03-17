const Footer = (): JSX.Element => {
  return (
    <footer className="bg-dark-blue text-light p-4 d-flex align-items-center justify-content-center">
      <div className="fs-3">
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
    </footer>
  );
};

export default Footer;
