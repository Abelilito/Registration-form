import React, { useState } from "react";
import { UserCard } from "../Usercard/UserCard";
import { ShowForm } from "../ShowForm/ShowForm";

export const UserRegister = () => {
  const [formData, setFormData] = useState([]);

  return (
    <>
      <h1 className="black">Formulaire d'inscription</h1>
      <div className="container">
        <ShowForm formData={formData} setFormData={setFormData} />
        <UserCard formData={formData} />
      </div>
    </>
  );
};
