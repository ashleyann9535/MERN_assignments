import { useState } from "react";
import "../App.css";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validation, setValidation] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log(newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setValidation("First name is required!");
    } else if (e.target.value.length < 2) {
      setValidation("First name must be 2 characters long!");
    } else {
      setValidation("");
    }
  };

  const lastNameChange = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setValidation("Last name is required!");
    } else if (e.target.value.length < 2) {
      setValidation("Last name must be 2 characters long!");
    } else {
      setValidation("");
    }
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setValidation("Email is required!");
    } else if (e.target.value.length < 8) {
      setValidation("Email must be 8 characters long!");
    } else {
      setValidation("");
    }
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setValidation("Password is required!");
    } else if (e.target.value.length < 8) {
      setValidation("Password must be 8 characters long!");
    } else {
      setValidation("");
    }
  };

  const confirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setValidation("Your password does not match");
    } else {
      setValidation("");
    }
  };

  return (
    <div>
      <form onSubmit={createUser}>
        {validation ? <p>{validation}</p> : ""}
        <div className="formDisplay">
          <label>First Name: </label>
          <input type="text" value={firstName} onChange={firstNameChange} />
        </div>

        <div className="formDisplay">
          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={lastNameChange}
          />
        </div>

        <div className="formDisplay">
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={emailChange}
          />
        </div>

        <div className="formDisplay">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={passwordChange}
          />
        </div>

        <div className="formDisplay">
          <label>Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={confirmPasswordChange}
          />
        </div>

        <input type="submit" value="Create User" />
      </form>

      <div>
        <h4>Form Data</h4>
        <p>First Name: {validation ? "" : <span>{firstName}</span>} </p>
        <p>Last Name: {lastName} </p>
        <p>Email: {email} </p>
      </div>
    </div>
  );
};

export default UserForm;
