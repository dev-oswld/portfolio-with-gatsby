import React from "react";
import { Link } from "gatsby";
import Header from "../components/headerBase";

export default () => {
    return (
        <div className="bg-white text-center">
            <Link to="">Home</Link>
            <Header headerText="😢"/>
            <h4 className="font-bold">Not found</h4>
            <div className="bg-orange-400">
                <span className="font-light">Check it out another route!</span>
            </div>
        </div>
    )
}