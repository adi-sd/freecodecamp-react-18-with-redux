import { useState } from "react";

const ShortCircuitExamples = () => {
    // falsy
    const [text, setText] = useState("a");
    // truthy
    const [name, setName] = useState("susan");
    const [user, setUser] = useState({ name: "john" });
    const [isEditing, setIsEditing] = useState();

    return (
        <div>
            {text && (
                <div>
                    <h2>whatever return 2 - {name}</h2>
                </div>
            )}
            {/* <h2>{text || "default value"}</h2> */}
            {user && <SomeComponent name={user.name}></SomeComponent>}
            <div style={{ border: "red solid 1px", margin: "1rem 0", padding: "1rem" }}>
                <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
                <button type="button" className="btn">
                    {isEditing ? "Edit" : "Add"}
                </button>
            </div>
            {user ? (
                <div>
                    <h2>Hello there - {name}</h2>
                </div>
            ) : (
                <div>
                    <h2>Please Login!</h2>
                </div>
            )}
        </div>
    );
};

const SomeComponent = ({ name }) => {
    return (
        <div>
            <h2>whatever return 2 - {name}</h2>
        </div>
    );
};

export default ShortCircuitExamples;
