import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import s from "./style.module.css";
import { InputField } from "../InputField/InputField";
import { CustomButton } from "../CustomButton/CustomButton";

export const ShowForm = ({ formData, setFormData }) => {
  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Z]+$/,
        "Le nom ne doit pas contenir des chiffres ou caractères speciaux"
      )
      .required("Champ requis"),
    birthdate: Yup.date().test("is-adult", "Vous êtes trop jeune", (value) => {
      return convertDate(value) >= 18;
    }),
    email: Yup.string().email("Mot de passe invalide").required("Champ requis"),
    password: Yup.string()
      .min(6, "Le MDP doit contenir 6 caractère min")
      .minLowercase(1, "Le MDP doit contenir au moins une lettre minuscule")
      .minUppercase(1, "Le MDP doit contenir au moins une lettre majuscule.")
      .minNumbers(1, "Le MDP doit contenir au moins un chiffre.")
      .minSymbols(1, "Le MDP doit contenir au moins 1 caractère spécial.")
      .required("Champ requis"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Mot de passe incorrect")
      .required("Champ requis"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      birthdate: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validateOnChange: true,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const formItems = [
    {
      type: "text",
      name: "name",
      placeholder: "Nom",
      borderError: borderError(formik.errors.name, formik.touched.name),
      value: formik.values.name,
      msgError: showErrorsMsg(formik.touched.name, formik.errors.name),
    },
    {
      type: "date",
      name: "birthdate",
      borderError: borderError(
        formik.errors.birthdate,
        formik.touched.birthdate
      ),
      value: formik.values.birthdate,
      msgError: showErrorsMsg(
        formik.touched.birthdate,
        formik.errors.birthdate
      ),
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      borderError: borderError(formik.errors.email, formik.touched.email),
      value: formik.values.email,
      msgError: showErrorsMsg(formik.touched.email, formik.errors.email),
    },
    {
      type: "password",
      name: "password",
      placeholder: "Mot de passe",
      borderError: borderError(formik.errors.password, formik.touched.password),
      value: formik.values.password,
      msgError: showErrorsMsg(formik.touched.password, formik.errors.password),
    },
    {
      type: "password",
      name: "passwordConfirmation",
      placeholder: "Confirmation du mot de passe",
      borderError: borderError(
        formik.errors.passwordConfirmation,
        formik.touched.passwordConfirmation
      ),
      value: formik.values.passwordConfirmation,
      msgError: showErrorsMsg(
        formik.touched.passwordConfirmation,
        formik.errors.passwordConfirmation
      ),
    },
  ];

  return (
    <>
      <Formik>
        <form
          className="flex flex-col gap-4 w-full sm:w-80"
          onSubmit={formik.handleSubmit}
        >
          {formItems.map((item, index) => {
            return (
              <InputField
                key={index}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                borderError={item.borderError}
                values={item.value}
                onChangeFn={(e) => {
                  formik.setFieldTouched(item.name);
                  formik.handleChange(e);
                }}
                msgError={item.msgError}
              />
            );
          })}
          <CustomButton formik={formik} />
        </form>
      </Formik>
    </>
  );

  function handleSubmit(values) {
    let newItem = {
      name: values.name,
      age: convertDate(values.birthdate),
      email: values.email,
    };
    setFormData([...formData, newItem]);
    formik.resetForm();
  }

  function convertDate(date) {
    const dated = new Date(date);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - dated.getFullYear();
    return age;
  }

  function showErrorsMsg(field, errors) {
    {
      return field && errors ? (
        <div className="text-[#991b1b] text-[10px]">{errors}</div>
      ) : null;
    }
  }

  function borderError(isErrors, touched) {
    {
      if (touched && isErrors) {
        return "border-[#991b1b]";
      } else {
        return "border-[#737373]";
      }
    }
  }
};
