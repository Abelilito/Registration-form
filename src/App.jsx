import { useState } from "react";
import "./App.css";
import { UserRegister } from "./components/UserRegister/UserRegister";
import LegalNotice from "./components/LegalNotice";

function App() {
  return (
    <div className="flex flex-col justify-between w-full">
      <UserRegister />
      <LegalNotice />
    </div>
  );
}

export default App;
