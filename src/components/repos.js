import React, { useState, useEffect } from "react";
import Repo from "./repo";
//import fetchRepos from "../libs/fetchRepos";
//import repos from "../data/repos";

export default () => {
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);

    useEffect(() => {
        let myRepos;
        const data = sessionStorage.getItem("repos");
        if (data) {
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1,7);
            return setRepos(myRepos);
        }

        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/dev-oswld/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);
            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            setRepos(myRepos);
        }
        fetchRepos();
    }, [])

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">My projects</h2>
                <p>Open Source in GitHub</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo) => {
                        return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
            <div className="mt-8 text-center">
            <a href="https://github.com/dev-oswld" className="btn" target="_blank" rel="noopener noreferrer">Visit more projects {reposCount}</a>
            </div>
        </div>
    )
}