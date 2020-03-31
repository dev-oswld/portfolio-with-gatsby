import React from 'react';

export default (props) => {
    const certificate = props.element;

    return (
        <div className="shadow p-8 bg-white mr-4 rounded">
            <h4 className="font-bold">{certificate.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-orange-500 text-white p-2 mt-2 rounded-full">Score: {certificate.score}</span>
            </div>
        </div>
    )
}