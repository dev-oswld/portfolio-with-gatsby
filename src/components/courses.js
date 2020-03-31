import React from 'react';

export default (props) => {
    const course = props.element;

    return (
        <div className="shadow p-8 bg-white mr-4 rounded max-w-4xl" style={{ height: "200px" }}>
            <h4 className="font-bold"> <a href={course.url} target="_blank" rel="noopener noreferrer">{course.title}</a> </h4>
            <div className="text-center">
                <span className="inline-block bg-orange-500 text-white p-2 mt-2" style={{ width: "200px" }}>Progress: {parseInt(course.progress)}%</span>
            </div>
        </div>
    )
}