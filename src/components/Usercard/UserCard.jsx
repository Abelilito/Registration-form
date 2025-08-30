import s from "./style.module.css";

export const UserCard = ({ formData }) => {
  if (formData.length > 0) {
    return (
      <div>
        <div className={s.container}>
          {formData.map((formData, index) => (
            <div key={index} className="text-sm">
              <div>
                <span className="text-[#262626] font-bold">Nom : </span>
                {formData.name}
              </div>

              <div>
                <span className="text-[#262626] font-bold"> Age : </span>
                {formData.age}
              </div>

              <div>
                <span className="text-[#262626] font-bold">E-mail : </span>
                {formData.email}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
