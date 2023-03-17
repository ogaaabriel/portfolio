import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./css/style.css";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;