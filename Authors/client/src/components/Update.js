import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import {FormControl,InputLabel,OutlinedInput,Button} from '@mui/material';

const Update = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const[name, setName] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err)
                
            })
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, {name})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.error)
                setErrors(err.response.data.error)
            })
    }


  return (
    <div>
      <h2>Update Author</h2>
      <form onSubmit={updateHandler}>
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
  )
}

export default Update