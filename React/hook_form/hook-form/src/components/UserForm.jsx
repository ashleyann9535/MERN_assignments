import { useState } from "react";
import "../App.css";

const UserForm = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log(newUser);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

  return (
    <div>
      <form onSubmit={createUser}>
        <div className="formDisplay">
          <label>First Name: </label>
          <input type="text" value={firstName} onChange= {(e) => setFirstName(e.target.value)} />
        </div>
        <div className="formDisplay">
          <label>Last Name: </label>
          <input type="text" value={lastName} onChange= {(e) => setLastName(e.target.value)} />
        </div>
        <div className="formDisplay">
          <label>Email: </label>
          <input type="email" value={email} onChange= {(e) => setEmail(e.target.value)} />
        </div>
        <div className="formDisplay">
          <label>Password: </label>
          <input type="password" value={password} onChange= {(e) => setPassword(e.target.value)} />
        </div>
        <div className="formDisplay">
          <label>Confirm Password: </label>
          <input type="password" value={confirmPassword} onChange= {(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <input type="submit" value="Create User" />
      </form>

      <div>
        <h4>Form Data</h4>
        <p>First Name: {firstName} </p>
        <p>Last Name: {lastName} </p>
        <p>Email: {email} </p>
      </div>
    </div>
  );
};

export default UserForm;
