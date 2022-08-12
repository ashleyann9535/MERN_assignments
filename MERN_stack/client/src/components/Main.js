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

  return (
    <div>
        {
            list.map((product) => (
                <div>
                    <Link to={`/oneproduct/${product._id}`}>{product.title}</Link>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Main