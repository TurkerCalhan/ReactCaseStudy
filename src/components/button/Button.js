import React from "react";
import "./button.css";

function Button({ onClick }) {
  return (
    <button id="git" className="buton" onClick={onClick}>
      Devam Et
    </button>
  );
}

export default Button;
