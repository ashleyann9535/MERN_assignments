import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const OneProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) =>{
            setProduct(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div>
        <h1>{product.title}</h1>
        <p> {product.price} </p>
        <p> {product.description} </p>
        <Link to={`/updateproduct/${product._id}`} >Update Product</Link>
    </div>
  )
}

export default OneProduct