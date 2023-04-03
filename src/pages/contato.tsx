import React, { ReactElement } from "react";
import { useForm } from "@formspree/react";
import Alert from "react-bootstrap/Alert";

import Label from "@/components/Label";
import Layout from "@/components/Layout";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgvlnkb");
  const [result, setResult] = React.useState(false);

  return (
    <div className="w-100 card p-5 shadow-sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          setResult(true);
          e.currentTarget.reset();
        }}
      >
        <div className="mb-3">
          <Label text="Nome" htmlFor="name" required={true} />
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="mb-3">
          <Label text="Email" htmlFor="email" required={true} />
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <Label text="Assunto" htmlFor="subject" required={true} />
          <input
            className="form-control"
            type="text"
            name="subject"
            id="subject"
            required
          />
        </div>
        <div className="mb-3">
          <Label text="Mensagem" htmlFor="message" required={true} />
          <textarea
            className="form-control"
            name="message"
            id="message"
            cols={30}
            rows={5}
          ></textarea>
        </div>
        <button className="btn btn-dark" type="submit">
          Enviar
        </button>
      </form>

      {state.succeeded && result && (
        <Alert className="mt-4" variant="success" onClose={() => setResult(false)} dismissible>
          Mensagem enviada com sucesso
        </Alert>
      )}
      {state.errors.length > 0 && result && (
        <Alert className="mt-4" variant="danger" onClose={() => setResult(false)} dismissible>
          Ocorreu um erro ao enviar a mensagem
        </Alert>
      )}
    </div>
  );
};

Contact.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Contact;
