import { useState } from "react";
// import axios from "axios";

const PersonForm = (props) => {
  const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ firstName, lastName });
    }

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>First Name</label>
        <br />

        {/* When the user types in this input, our onChange synthetic event 
            runs this arrow function, setting that event's target's (input) 
            value (what's typed into the input) to our updated state   */}
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </p>
      <p>
        <label>Last Name</label>
        <br />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </p>
      <input type="submit" />
    </form>
  );
};
export default PersonForm;
