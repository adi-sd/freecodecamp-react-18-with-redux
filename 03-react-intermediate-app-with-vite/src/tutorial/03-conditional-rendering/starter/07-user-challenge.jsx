import { useState } from "react";

const UserChallenge = () => {
    const [user, setUser] = useState(null);

    const login = () => {
        // normally connect to DB
        setUser({ name: "Aditya Dhage" });
    };

    const logOut = () => {
        // normally connect to DB
        setUser(null);
    };

    return (
        <div>
            {user ? (
                <div>
                    <h4>hello there, {user.name}!</h4>
                    <button type="button" className="btn" onClick={logOut}>
                        log out
                    </button>
                </div>
            ) : (
                <div>
                    <h4>Please Login!</h4>
                    <button type="button" className="btn" onClick={login}>
                        login
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserChallenge;
