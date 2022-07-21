import { useState } from "react";

const Tabs = (props) => {
    const [tab, setTab] = useState(1)

  const arr = [1, 2, 3];

  const handleClick = (e) => {
    e.preventDefault();
    setTab(e.target.value);
  };

  return (
    <div>
      {arr.map((num) => {
        return (
            <button className="tabs" value={num} onClick={handleClick}>
              Tab {num}
            </button>
        );
      })}
      <div className="content">
      <p>This is content for tab {tab}</p>
      </div>
    </div>
  );
};

export default Tabs;
