import React, { useEffect, useState } from "react";
import "./ProjectsPage.css";
import axios from "axios";

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const headers = {};

        if (import.meta.env.REACT_APP_GITHUB_TOKEN) {
          headers.Authorization = `token ${
            import.meta.env.REACT_APP_GITHUB_TOKEN
          }`;
        }

        const repoNames = [
          "Allen",
          "meal-planner",
          "stuff-to-do-finder",
          "Work-IN",
          "library-of-life",
        ];
        const repoRequests = repoNames.map((repo) =>
          axios.get(`https://api.github.com/repos/LucasHouska/${repo}`, {
            headers,
          })
        );

        const responses = await Promise.all(repoRequests);
        setRepos(responses.map((res) => res.data));
      } catch (err) {
        console.error("Error fetching repositories:", err);
        setError(
          "Something went wrong fetching repositories. Please try again later."
        );
      }
    };

    fetchRepos();
  }, []);

  return (
    <div id="projects-page">
      <h1>My Projects</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
