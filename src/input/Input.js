import React from "react";

const Input = ({ name, label, value, onChange, type = "text", onFocus }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        aria-label={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Input;
