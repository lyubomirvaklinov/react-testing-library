import React, { useState } from "react";
import Input from "../input/Input";
import "../App.css";

const Form = () => {
  const [state, setState] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [showValidationMsg, setShowValidationMsg] = useState(false);
  const onChange = (e) => {
    setState({ ...state, [e?.target?.name]: e?.target?.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(state).every((curr) => curr)) {
      setShowValidationMsg(true);
      return;
    }
    setTimeout(() => {
      setIsRegistered(true);
    }, 0);
  };

  const onFocus = () => {
    setShowValidationMsg(false);
  };

  return !isRegistered ? (
    <form onSubmit={handleSubmit} className="form">
      <Input
        name="firstName"
        label="First Name"
        onFocus={onFocus}
        value={state?.firstName}
        onChange={onChange}
      />
      <Input
        name="email"
        label="Email"
        onFocus={onFocus}
        value={state?.email}
        onChange={onChange}
      />
      <Input
        type="password"
        name="password"
        label="Enter password"
        onFocus={onFocus}
        value={state?.password}
        onChange={onChange}
      />
      <button disabled={showValidationMsg} type="submit" name="submit">
        Submit
      </button>
      {showValidationMsg ? (
        <span className="validation">Please fill out all of the fields</span>
      ) : null}
    </form>
  ) : (
    <div className="flex-center loading-result">Registered</div>
  );
};

export default Form;
