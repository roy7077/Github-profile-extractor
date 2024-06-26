import React from 'react';
import "../style/repocard.css"; // Import CSS for styling

const RepoCard = ({ repo }) => {
    return (
        <div className="repo-card"> {/* Container for the entire repository card */}
            <h2>{repo.name}</h2> {/* Display the repository name */}
            <div className='repo-des'> {/* Container for the repository description */}
                <p>{repo.description}</p> {/* Display the repository description */}
            </div>
            <div className="repo-keywords"> {/* Container for the repository keywords/topics */}
                {repo.topics.map((topic, index) => (
                    <span key={index} className="keyword">{topic}</span> 
                ))}
            </div>
        </div>
    );
};

export default RepoCard;
