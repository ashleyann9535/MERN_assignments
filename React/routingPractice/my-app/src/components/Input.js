import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Input = (props) => {
    const {text, textColor, backgroundColor} = useParams();

  return (
    <div>
      {isNaN(text) ? 
        <h2 style={ textColor? {color: textColor, backgroundColor: backgroundColor} : null}>The word is: {text}</h2>
       : 
        <h2>This number is: {text}</h2>
      }
      <Link to={"/"}>Go back</Link>
    </div>
  );
};

export default Input;
