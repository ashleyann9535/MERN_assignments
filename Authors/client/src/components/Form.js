import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {FormControl,InputLabel,OutlinedInput,Button} from '@mui/material';

const Form = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
    const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/author/create", { name })
      .then((res) => {
        console.log(res.data);
        setName("");
        navigate('/')
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setErrors(err.response.data.error);
      });
  };

  return (
    <div>
        <h2>Add new Author</h2>
        <form onSubmit={submitHandler}>
        {errors.name && <p>{errors.name.message}</p>}
          <FormControl variant='outlined'>
            <InputLabel>Name:</InputLabel>
            <OutlinedInput type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <br/>
          <Button variant="outlined" color="primary" onClick={() => {navigate('/')}}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">Submit</Button>

        </form>
    </div>
  );
};

export default Form;
