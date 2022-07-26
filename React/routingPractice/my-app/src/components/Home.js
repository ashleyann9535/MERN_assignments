import {Link} from 'react-router-dom'

const Home = (props) => {


    return (
        <div>
            <h2>Welcome</h2>
            <Link to={"/"}>Go back</Link>
        </div>
    )
}

export default Home;