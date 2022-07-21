import { useState } from "react";

const Form = (props) => {
    const {boxColorArray, setBoxColorArray} = props;
    const [color, setColor] = useState('')

    const submitHandler = (event) => {
        event.preventDefault();
        setBoxColorArray([...boxColorArray, color]);
        console.log(color);
        setColor('');
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Color: </label>
        <input type="text" name="color" value={color} onChange={(event) => setColor(event.target.value)} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Form;
