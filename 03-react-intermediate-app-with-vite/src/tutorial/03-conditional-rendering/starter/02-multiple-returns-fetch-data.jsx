import { useEffect, useState } from "react";

const url = "https://api.github.com/users/adi-sd";

const MultipleReturnsFetchData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Got Error in Fetch Response");
            }
            const fetchedUser = await response.json();
            setUser(fetchedUser);
        } catch (error) {
            setIsError(true);
            console.error(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>;
    } else if (isError) {
        return <h2>There was an Error!</h2>;
    } else {
        const { avatar_url, bio, name, company } = user;
        return (
            <div>
                <img style={{ width: "150px", borderRadius: "25px" }} src={avatar_url} alt={name} />
                <h2>{name}</h2>
                <h4>works {company}</h4>
                <p>{bio}</p>
            </div>
        );
    }
};

export default MultipleReturnsFetchData;
