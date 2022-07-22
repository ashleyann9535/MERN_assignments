// import { useState } from "react";

const ViewList = (props) => {
  const { listArr, setListArr } = props;

  // const [isComplete, setIsComplete] = useState(false);

  const handleClick = (item) => {
    if (item.isComplete === false) {
      item.isComplete = true;
    } else {
      item.isComplete = false;
    }
    let updateList = [...listArr];
    setListArr(updateList);
  };

  const handleDelete = (i) => {
    listArr.splice(i, 1);
    let updateList = [...listArr];
    setListArr(updateList);
  };

  return (
    <div className="ViewList">
      {listArr.map((item, i) => (
        <div className="list">
          <input type="checkbox" onClick={(e) => handleClick(item)} />
          <p
            style={{
              textDecoration: item.isComplete === true ? "line-through" : "",
            }}
          >
            {item.input}
          </p>
          <button onClick={(e) => handleDelete(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ViewList;
