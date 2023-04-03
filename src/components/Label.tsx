const Label = ({
  text,
  htmlFor,
  required = false,
}: {
  text: string;
  htmlFor: string;
  required?: boolean;
}) => {
  return (
    <label className="fw-bold" htmlFor={htmlFor}>
      {text} {required && <span className="text-danger">*</span>}
    </label>
  );
};

export default Label;
