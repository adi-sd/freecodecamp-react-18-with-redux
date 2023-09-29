import { useState } from "react";

const UseStateBasics = () => {
    let [countA, setCountA] = useState(0);

    const handleClickA = () => {
        countA++;
        console.log(`Count A : ${countA}`);
        setCountA(countA);
    };

    let [countB, setcountB] = useState(0);

    const handleClickB = () => {
        countB++;
        console.log(`Count B: ${countB}`);
        setcountB(countB);
    };

    return (
        <div>
            <h4>You clicked A - {countA} times!</h4>
            <button type="button" className="btn" onClick={handleClickA}>
                Increase A
            </button>
            <br />
            <br />
            <h4>You Clicked B - {countB} times!</h4>
            <button type="button" className="btn" onClick={handleClickB}>
                Increase B
            </button>
        </div>
    );
};

export default UseStateBasics;
