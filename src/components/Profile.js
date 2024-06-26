import { useState, useEffect } from "react";
import "../style/profile.css";
import ProfileCard from "./ProfileCard";

const Profile = () => {
    // State to store the fetched user data
    const [data, setData] = useState(null);
    // State to store the username for which the data will be fetched
    const [userName, setUserName] = useState("roy7077");
    // State to store the text input value
    const [text, setText] = useState('');

    // Function to fetch data from the GitHub API
    const getData = async () => {
        const tempData = await fetch("https://api.github.com/users/" + userName);
        const json = await tempData.json();
        setData(json);
        console.log(json);
    };

    // useEffect hook to fetch data when the component mounts
    // and whenever the userName state changes
    useEffect(() => {
        getData();
    }, [userName]);

    // If data is not yet fetched, show a loading message
    if (!data) return <h1>...Loading</h1>;

    return (
        <div className="profile">
            <div className="profile-container">
                <h1>Github Profile Extractor</h1>
                <input 
                    placeholder="   Enter user's name"
                    value={text}
                    onChange={(e) => setText(e.target.value)} // Update the text state on input change
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) { // If Enter key is pressed
                            setUserName(text); // Set the userName state to the input text
                        }
                    }}
                />
            </div>
            {
                // Conditionally render the ProfileCard component if data is available
                data && (
                    <div className="profile-card-div">
                        <ProfileCard data={data} />
                    </div>
                )
            }
        </div>
    );
};

export default Profile;
