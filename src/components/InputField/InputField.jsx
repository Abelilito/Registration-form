import { Field } from "formik";

export const InputField = ({
  type,
  name,
  placeholder,
  borderError,
  values,
  onChangeFn,
  autoComplete,
  msgError,
}) => {
  return (
    <>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={
          `${borderError}` +
          " border border-solid p-[1.5rem] h-[48px] rounded-md text-[0.8rem] focus:border-[#6d28d9] focus-visible:outline-none"
        }
        value={values}
        onChange={onChangeFn}
        autoComplete={autoComplete}
        required
      />
      {msgError}
    </>
  );
};
