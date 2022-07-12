import '../App.css';
import React, { useState } from 'react';

const PersonalCard = (props) => {

    const {name, age, hair} = props;

    const [firstAge, setAge] = useState(age); 

    const handleClick = () =>{
        setAge(firstAge + 1);
    }

    return (
        <div className = "personalCard">
            <h1>{name}</h1>
            <p className = "left-align">Age: {firstAge}</p>
            <p className = "left-align">Hair Color: {hair}</p>
            <button onClick= {handleClick} >Count Age</button>
        </div>
    )
}

export default PersonalCard;