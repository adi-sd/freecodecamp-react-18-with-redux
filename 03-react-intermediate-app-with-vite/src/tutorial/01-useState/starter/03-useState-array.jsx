import { data } from "../../../data/data";
import { useState } from "react";

const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        console.log(id);
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    const clearAllItems = () => {
        setPeople([]);
    };

    return (
        <div>
            {people.map((person) => {
                const { id, name } = person;
                //console.log(person);
                return (
                    <div key={id}>
                        <h4 style={{ display: "inline", margin: "1rem" }}>{name}</h4>
                        <button type="button" style={{ marginTop: "2rem" }} onClick={() => removeItem(id)}>
                            remove
                        </button>
                    </div>
                );
            })}
            <button type="button" className="btn" style={{ marginTop: "3rem" }} onClick={clearAllItems}>
                Remove All
            </button>
        </div>
    );
};

export default UseStateArray;
