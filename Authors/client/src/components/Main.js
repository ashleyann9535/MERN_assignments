import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const Main = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeFromDom = (id) => {
    setList(list.filter((author) => author._id !== id));
  };

  return (
    <div className="table-size">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Author Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {list.map((author, index) => (
          <tr key={index}>
                <td>{author.name}</td>
                <td>
                  <button class="m-2">
                    <Link to={`/edit/${author._id}`}>Edit</Link>
                  </button>
                  <DeleteButton
                    id={author._id}
                    successCallback={() => removeFromDom(author._id)}
                  />
                </td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
