import Alert from "react-bootstrap/Alert";
import { useForm } from "@formspree/react";
import React from "react";

const ContactForm = (): JSX.Element => {
  const [state, handleSubmit] = useForm("mrgvlnkb");
  const [result, setResult] = React.useState(false);

  return (
    <div className="container p-4 p-sm-5 py-5" id="contato">
      <h2 className="display-5 text-center">Entre em contato</h2>
      <form
        className="mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          setResult(true);
          e.currentTarget.reset();
        }}
      >
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject">Assunto:</label>
          <input
            className="form-control"
            type="text"
            name="subject"
            id="subject"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name">Nome:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <button className="btn btn-dark" type="submit">
          Enviar
        </button>
      </form>

      {state.succeeded && result && (
        <Alert variant="success" onClose={() => setResult(false)} dismissible>
          Mensagem enviada com sucesso
        </Alert>
      )}
      {state.errors.length > 0 && result && (
        <Alert variant="danger" onClose={() => setResult(false)} dismissible>
          Ocorreu um erro ao enviar a mensagem
        </Alert>
      )}
    </div>
  );
};

export default ContactForm;
