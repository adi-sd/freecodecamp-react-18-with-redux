import React from "react";

export const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        console.log("Handle from input");
    };
    const handleButtonClick = () => {
        alert("Handle Button Click");
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("HandleForm Submit");
    };
    return (
        <section>
            <center>
                <form onSubmit={handleFormSubmit}>
                    <h1>Typical Form</h1>
                    <input type="text" name="example" onChange={handleFormInput} style={{ margin: "1rem 0" }} />
                    <button type="submit">Submit</button>
                    <div>
                        <button onClick={handleButtonClick}>Click Me!</button>
                    </div>
                </form>
            </center>
        </section>
    );
};
