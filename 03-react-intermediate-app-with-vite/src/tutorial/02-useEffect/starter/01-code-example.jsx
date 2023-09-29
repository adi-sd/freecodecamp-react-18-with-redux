import { useState } from "react";

let count = 0;

const CodeExample = () => {
    const [value, setValue] = useState(0);

    const sayHello = () => {
        console.log(`Hello There! ${count++}`);
    };

    sayHello();

    return (
        <div>
            <h1>value : {value}</h1>
            <button className="btn" onClick={() => setValue(value + 1)}>
                click me
            </button>
        </div>
    );
};
export default CodeExample;
