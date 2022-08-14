import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateProduct = (props) => {
    const {id} = useParams(); 
    const navigate = useNavigate()

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err => console.log(err))
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res);
            navigate('/home')
        })
        .catch(err =>{
            console.log(err)
        })
    }

  return (
    <div>
        <form onSubmit={updateHandler}>
            <label>Title:
                <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
            </label>
            <label>Price:
                <input type='number' value={price} onChange={e => setPrice(e.target.value)}/>
            </label>
            <label>Description:
                <textarea rows="4" cols="25" value={description} onChange={e => setDescription(e.target.value)}> </textarea>
            </label>
            <input type="submit" />
        </form>
    </div>
  )
}

export default UpdateProduct