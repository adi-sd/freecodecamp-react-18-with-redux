import { useEffect, useState } from "react";

const CleanupFunction = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        console.log("hmm, this is very interesting! from the Main Component");
    }, []);

    return (
        <div>
            <button className="btn" onClick={() => setToggle(!toggle)}>
                {toggle ? "Toggle: Off" : "Toggle: On"}
            </button>
            <br />
            <br />
            {toggle && <RandomComponent></RandomComponent> /* Component Mounting */}
        </div>
    );
};

const RandomComponent = () => {
    useEffect(() => {
        console.log("hmm, this is very interesting! from the Random Component");
        const myInterval = setInterval(() => {
            console.log("hello from the interval!"), 1000;
        });
        return () => {
            clearInterval(myInterval);
            console.log("cleanup");
        };
    }, []);
    return <h1>Hello There</h1>;
};

export default CleanupFunction;
