import { useState } from "react";

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "Aditya",
        age: "27",
        hobby: "Listning Music",
    });

    const displayPerson = () => {
        setPerson({
            name: "John",
            age: "30",
            hobby: "Scream at the TV",
        });
    };

    return (
        <div>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>Enjoys: {person.hobby}</h4>
            <button type="button" className="btn" onClick={displayPerson}>
                Change {person.name}
            </button>
        </div>
    );
};

export default UseStateObject;
