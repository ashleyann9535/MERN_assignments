import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => {
                setPeople(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])

    const createPerson = personParam => {
        axios.post('http://localhost:8000/api/people', personParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setPeople([...people, res.data])
            })
            .catch((err)=>console.log(err))
    }

    const removeFromDom = personId => {
        axios.delete("http://localhost:8000/api/people/" + personId)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPeople(people.filter(person=> person._id !== personId));
        })
        .catch((err)=>console.log(err))
        
    }
    
    return (
        <div>
    	{/* PersonForm and Person List can both utilize the getter and setter established in their parent component: */}
           <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName="" />
            <hr/>
           <PersonList personList={people} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;