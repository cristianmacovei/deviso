import React, { useEffect, useState } from "react";

export default function Portfolio({ username, token }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
      });
  }, [username, token]);

  return (
    <div className="flex overflow-x-scroll">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          className={`grid grid-rows-1 grid-flow-col gap-4 p-4 overflow-x-auto`}
        >
          {projects.map((repo) => (
            <a
              href={`https://www.github.com/users/${username}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              key={repo.id}
              className="w-60 md:w-96 h-60 md:h-96 rounded-xl drop-shadow-md bg-persianblue overflow-scroll text-center flex flex-col place-content-center p-4"
            >
              <div className="text-xl text-snow whitespace-normal">
                {repo.name}
              </div>
              <div className="text-sm text-snow whitespace-normal">
                {repo.description || "😕 no description at the moment"}
              </div>
              {/* Add more details as needed */}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
