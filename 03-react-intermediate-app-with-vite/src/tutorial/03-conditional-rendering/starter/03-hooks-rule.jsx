import { useState, useEffect } from "react";

// Falsy values in JS
// false
// 0
// ""
// null
// undefined
// NaN
// a && b will return --> returns whichever is false
// a || b will return --> retuns b if a is false, a is returned if it is true ; b is not checked

const Example = () => {
    const [condition, setCondition] = useState(true);
    if (condition) {
        // won't work
        const [state, setState] = useState(false);
    }

    // JS Shorthand
    let a = "aditya1";
    let b = 0;
    let c = 0;

    let shAnd = (first, second) => {
        return first && second;
    };

    let shOr = (first, second) => {
        return first || second;
    };

    console.log(shAnd(a, b));
    console.log(shAnd(b, c));
    console.log(shOr(a, b));
    console.log(shOr(b, c));

    if (condition) {
        return <h2>Hello There</h2>;
    }
    // this will also fail
    useEffect(() => {
        console.log("hello there");
    }, []);
    return <h2>example</h2>;
};

export default Example;
