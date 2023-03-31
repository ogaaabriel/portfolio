import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./css/style.css";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";
import Navigation from "./components/Navbar";

const App = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <Header />
      <div className="bg-whitesmoke">
        <div
          id="sobre"
          className="vh-min-100 d-flex flex-column justify-content-center"
        >
          <About />
          <Skills />
        </div>
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default App;
