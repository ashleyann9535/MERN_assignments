import '../App.css';

const PersonalCard = (props) => {

    const {name, age, hair} = props;

    return (
        <div className = "personalCard">
            <h1>{name}</h1>
            <p className = "left-align">Age: {age}</p>
            <p className = "left-align">Hair Color: {hair}</p>
        </div>
    )
}

export default PersonalCard;