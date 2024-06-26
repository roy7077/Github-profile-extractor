import "../style/profilecard.css"; // Import CSS for styling
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation

// ProfileCard component which receives 'data' as a prop
const ProfileCard = ({ data }) => {
    return (
        <div className="profile-card">
            <div className="profile-card-container">
                {/* Display the user's avatar */}
                <img src={data.avatar_url} alt="profile_pic" />

                <div className="profile-info">
                    {/* Display the user's name */}
                    <h1>{data.name}</h1>
                    {/* Display the number of followers */}
                    <h4> Followers {data.followers}</h4>
                    {/* Display the number of users the profile is following */}
                    <h4> Following {data.following}</h4>
                    {/* Display the number of public repositories */}
                    <h4> Repository {data.public_repos}</h4>
                </div>
            </div>

            {/* Link to the user's repositories page, using their login name in the URL */}
            <Link to={`/repos/${data.login}`}>
                <button className="button-40" role="button">View Repositories</button>
            </Link>
        </div>
    );
};

export default ProfileCard;
