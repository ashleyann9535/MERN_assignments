import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const Detail = (props) => {
  const [person, setPerson] = useState({});
  const { id } = useParams();
  // Reach router creates a key:value pair inside of our props object
  //     for every variable found inside the "path" attribute.
  // For example, the "path" attribute of the Detail component (Code Block 3 - App.js).
  // We can deconstruct the id from props.
  // The unique part of our "path" (:id) will have its value
  //    assigned in the Link element's "to" attribute (e.g. Code Block 4)
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/person/" + id)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
      <Link to={"/people/edit/" + person._id}>Edit</Link>
    </div>
  );
};
export default Detail;
