import {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const OneProduct = (props) => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState({});
    const {list, setList} = props;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) =>{
            setProduct(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res.data)
            navigate('/home')
        })
        .catch((err) =>{
            console.log(err)
        })
    }

  return (
    <div>
        <h1>{product.title}</h1>
        <p> {product.price} </p>
        <p> {product.description} </p>
        <Link to={`/updateproduct/${product._id}`} >Update Product</Link>
        <button onClick={() =>deleteHandler(product._id)} >Remove Product</button>
    </div>
  )
}

export default OneProduct