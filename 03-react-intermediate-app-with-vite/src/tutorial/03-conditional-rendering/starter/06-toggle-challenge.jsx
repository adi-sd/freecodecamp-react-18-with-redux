import { useState } from "react";

const ToggleChallenge = () => {
    const [showAlert1, setShowAlert1] = useState(false);

    const toggleAlert1 = () => {
        if (showAlert1) {
            setShowAlert1(false);
            return;
        } else {
            setShowAlert1(true);
        }
    };

    return (
        <div>
            <div>
                <button type="button" className="btn" onClick={toggleAlert1}>
                    {showAlert1 ? "Toggle: Off" : "Toggle: On"}
                </button>
                {showAlert1 && <Alert num="1"></Alert>}
            </div>
        </div>
    );
};

const Alert = ({ num }) => {
    return (
        <div className="alert alert-danger">
            <h1>Hello World : {num}</h1>
        </div>
    );
};

export default ToggleChallenge;
