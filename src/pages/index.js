import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Repos from "../components/repos"; 
import Codigofacilito from "../components/codigofacilito";

export default () => 
<div>
<Link className="font-bold text-orange-500 hover:text-orange-700 ml-8" to="/">Home</Link>
    <Link className="font-bold text-orange-500 hover:text-orange-700 ml-8" to="/contact">Contact</Link>
    <Link className="font-bold text-orange-500 hover:text-orange-700 ml-8" to="/about">About</Link>
    <Header />
    <Repos />
    <Codigofacilito />
</div>