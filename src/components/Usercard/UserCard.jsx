import s from "./style.module.css";

export const UserCard = ({ formData }) => {
  if (formData.length > 0) {
    return (
      <div>
        <h3 className={s.mtNone}>Liste d'inscription</h3>
        <div className={s.container}>
          {formData.map((formData, index) => (
            <div key={index}>
              <div>Nom : {formData.name}</div>
              <div>Age : {formData.age}</div>
              <div>Email : {formData.email}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
