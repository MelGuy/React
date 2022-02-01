import React from "react";
import TenorGif from "../../components/GiveTenorGif";
import Navbar from "../../components/NavBar";

function Tenor(){
    return(
        <header>
            <Navbar/>
            <div>
                <TenorGif/>
            </div>
        </header>
    )
}

export default Tenor;