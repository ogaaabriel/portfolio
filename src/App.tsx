import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./css/style.css";

import Header from "./components/Header";
import Skills from "./components/Skills";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Skills />
      <div>Projects</div>
      <div>Contact</div>
      <div>Footer</div>
    </>
  );
};

export default App;
