import { useState } from "react";

const Form = (props) => {
    const {boxColorArray, setBoxColorArray, boxSizeArray, setBoxSizeArray} = props;
    const [color, setColor] = useState('')
    const [size, setSize] = useState()

    const submitHandler = (event) => {
        event.preventDefault();
        setBoxColorArray([...boxColorArray, color]);
        setBoxSizeArray([...boxSizeArray, size])
        setSize();
        setColor('');
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Color: </label>
        <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <br />
        <label>Size: </label>
        <input type="number" name="size" value={size} onChange={ (e) => setSize(e.target.value)} />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Form;
