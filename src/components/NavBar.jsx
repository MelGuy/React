import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <header className="Nav">
            <Link to="/">Home</Link>
            <Link to="/Giphy">Gif Giphy</Link>
            <Link to="/Tenor">Gif Tenor</Link>
        </header>
    )
}

export default Navbar;
