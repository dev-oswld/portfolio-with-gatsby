import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Post from "./post";
import Certificate from "./certificate";
import Courses from "./courses";

export default () => {
    //Hooks and GraphQL Query
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data { 
                certificates { title score code } 
                courses { title url progress }
            }
        } 
    }`);

    return (
        <section>
            <div className="mt-24 bg-gray-300">
                <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center bg-w">CodigoFacilito section</h2>
                    <Post data={data.codigofacilitoJson.data.courses} card={Courses} title="Courses" /> 
                    <Post data={data.codigofacilitoJson.data.certificates} card={Certificate} title="Certificates" />
                </div>
            </div>
        </section>
    )
}