import React from "react";

const Greeting = () => {
    return (
        <div>
            <h1>Hello from my first react app!</h1>
            <hr />
            <h2>This is my first React Componenet</h2>
        </div>
    );
};

const Person = () => {
    return (
        <div>
            <Greeting></Greeting>
            <h3>Aditya Dhage</h3>
        </div>
    );
};

export default Person;
