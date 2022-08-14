import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Main = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then((res) => {
            setList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            const newList = list.filter((product) => {
                return product._id !== id
            })
            setList(newList)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

  return (
    <div>
        {
            list.map((product) => (
                <div>
                    <Link to={`/oneproduct/${product._id}`}>{product.title}</Link>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <button onClick={() =>deleteHandler(product._id)} >Remove Product</button>
                </div>
            ))
        }
    </div>
  )
}

export default Main