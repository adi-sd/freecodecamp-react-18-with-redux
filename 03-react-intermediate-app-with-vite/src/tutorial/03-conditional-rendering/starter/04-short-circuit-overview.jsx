import { useState } from "react";

const ShortCircuitOverview = () => {
    const [truthy, setTruthy] = useState("Aditya");
    const [flasy, setFalsy] = useState("");

    return (
        <div>
            <h1>short circuit overview</h1>
            <br />
            <h4> Truthy AND : {truthy && "Hello world!"} </h4>
            <h4> Truthy OR : {truthy || "Hello world!"} </h4>
            <h4> Falsy AND : {flasy && "Hello world!"} </h4>
            <h4> Falsy OR : {flasy || "Hello world!"} </h4>
        </div>
    );
};
export default ShortCircuitOverview;
