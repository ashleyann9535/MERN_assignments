import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const ProductsForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title, //shortcut syntax
            price,
            description
        })
        .then(res => {
            console.log(res); // always console log to track data
            console.log(res.data);
            setTitle('');
            setPrice('');
            setDescription('');
        })
        .catch(err => console.log(err));
    };

  return (
    <div>
        <form onSubmit={submitHandler}>
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

export default ProductsForm;