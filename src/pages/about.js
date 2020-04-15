import React from "react"
import { Link } from "gatsby"
import Header from "../components/headerBase"

export default () => (
  <div>
    <Link className="font-bold text-orange-500 hover:text-orange-700 ml-8" to="/">Home</Link>
    <Link className="font-bold text-orange-500 hover:text-orange-700 ml-8" to="/contact">Contact</Link>
    <Link className="font-bold text-orange-500 hover:text-orange-700 ml-8" to="/about">About</Link>
    <Header headerText="About this..."/>
    <p className="text-justify font-light mx-8 my-8">Self-taught by decision, software engineer by profession. Self-taught by decision, software engineer by profession. Self-taught by decision, software engineer by profession.</p>
  </div>
)