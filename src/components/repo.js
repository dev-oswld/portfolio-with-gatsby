import React from "react";

export default (props) => (
    <li className="flex items-center">
        <div className="w-9/12 overflow-hidden">
            <h4 className="text-gray-800 font-bold truncate">{props.repo.name}</h4>
            <p className="text-sm text-gray-700 overflow-hidden" style={{ height: "1.5em" }}>{props.repo.description}</p>
        </div>
        <div className="flex-1 text-right">
        <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">See more</a>
        </div>
    </li>
)