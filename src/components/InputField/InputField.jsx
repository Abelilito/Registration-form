export const InputField = ({
  type,
  name,
  placeholder,
  borderError,
  values,
  onChangeFn,
  msgError,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={borderError}
        value={values}
        onChange={onChangeFn}
        required
      />
      {msgError}
    </>
  );
};
