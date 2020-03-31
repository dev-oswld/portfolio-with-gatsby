import React from "react";
import Header from "../components/header";


export default () => {
    return (
        <div className="bg-white text-center">
            <Header />
            <h4 className="font-bold">Not found</h4>
            <div className="bg-orange-400">
                <span className="font-light">Check it out another route!</span>
            </div>
        </div>
    )
}