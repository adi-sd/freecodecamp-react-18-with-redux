import { useState } from "react";

const UseStateBasics = () => {
    let [count, setCount] = useState(0);

    const handleClick = () => {
        count++;
        console.log(count);
        setCount(count);
    };

    return (
        <div>
            <h4>You clicked {count} times!</h4>
            <button type="button" className="btn" onClick={handleClick}>
                Increase
            </button>
        </div>
    );
};

export default UseStateBasics;
