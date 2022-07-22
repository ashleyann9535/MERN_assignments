import { useState } from "react";

const AddItem = (props) => {
  const [item, setItem] = useState("");
  const { listArr, setListArr } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    setListArr([
      ...listArr,
      {
        input: item,
        isComplete: false,
        key: Math.floor(Math.random() * 10000).toString(),
      },
    ]);
    setItem("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddItem;
