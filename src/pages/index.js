import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Repos from "../components/repos"; 
import Codigofacilito from "../components/codigofacilito";

export default () => 
<div>
    <Link to="/contact/">Contact</Link>
    <Header />
    <Repos />
    <Codigofacilito />
</div>