import React, { useState } from "react";
import { UserCard } from "../Usercard/UserCard";
import { ShowForm } from "../ShowForm/ShowForm";
import "../../App.css";

export const UserRegister = () => {
  const [formData, setFormData] = useState([]);

  return (
    <div className="px-8 sm:px-24 mt-[4rem]">
      <h1 className="text-3xl mb-20 md:mb-24 font-bold text-center text-[#262626]">
        Formulaire d'inscription
      </h1>
      <div className="flex justify-around flex-col md:flex-row gap-20">
        <ShowForm formData={formData} setFormData={setFormData} />
        <UserCard formData={formData} />
      </div>
    </div>
  );
};
