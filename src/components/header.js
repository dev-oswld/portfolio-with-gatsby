import React from "react";
import illustration from "../img/undraw_certificate.svg";
import Form from "./form";

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-6xl text-blue-900 hover:text-blue-800">Oswaldo TC</h1>
                    <p className="font-light italic text-xl text-blue-900">Self-taught by decision, software engineer by profession.</p>
                </div>
                <img src={illustration} alt="human certificate" style={{ height: "300px" }}></img>
            </div>
            <div>
                <Form />
            </div>
        </div>
    </header>
)