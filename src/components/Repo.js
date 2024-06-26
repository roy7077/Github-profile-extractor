import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState hooks
import { useParams } from 'react-router-dom'; // Import useParams hook from react-router-dom to get URL parameters
import RepoCard from './RepoCard'; // Import the RepoCard component
import "../style/repo.css"; // Import CSS for styling

const Repo = () => {
    const { username } = useParams(); // Extract the username parameter from the URL
    const [repos, setRepos] = useState([]); // State to store the list of repositories

    // useEffect hook to fetch repositories when the component mounts or when the username changes
    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await response.json();
            setRepos(data); // Update the state with the fetched data
        };

        fetchRepos(); // Call the function to fetch repositories
    }, [username]); // Dependency array with username, so it re-runs when username changes

    // If repos array is empty, display a loading message
    if (repos.length === 0) return <h1>.....Loading</h1>;

    return (
        <div className='repo'>
            <div className='repo-container'>
                {/* Display the username's repositories */}
                <h1>{username}'s Repositories</h1>
                <div className="repo-list">
                    {repos.map(repo => (
                        // Map over the repos array and render a RepoCard for each repository
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Repo;
