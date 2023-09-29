import { useState } from "react";

const UseStateGotcha = () => {
    let [count, setCount] = useState(0);

    const handleButtonClick = () => {
        // setCount((currentCount) => {
        //     const newCount = currentCount + 1;
        //     return newCount;
        // });
        // setTimeout(() => {
        //     console.log("cliked the button");
        //     setCount(count + 1);
        // }, 3000);
        setTimeout(() => {
            console.log("cliked the button");
            setCount((currState) => {
                return currState + 1;
            });
        }, 3000);
    };

    return (
        <div>
            <button type="button" className="btn" onClick={handleButtonClick}>
                Button A
            </button>
            <h1>You Clicked Button A - {count} times...</h1>
        </div>
    );
};

export default UseStateGotcha;
