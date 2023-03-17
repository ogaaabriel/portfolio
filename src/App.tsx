import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import './css/style.css'

import Header from "./components/Header";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div>Skills</div>
      <div>Projects</div>
      <div>Contact</div>
      <div>Footer</div>
    </>
  );
};

export default App;
