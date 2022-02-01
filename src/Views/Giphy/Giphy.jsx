import React from "react";
import { Outlet } from "react-router-dom";
import GiphyGif from "../../components/GiveGiphyGif";
import Navbar from "../../components/NavBar";


function Giphy(){
    return(
        <div>
            <header>
                <Navbar/>
                <div>
                    <GiphyGif/>
                </div>
            </header>
            <Outlet/>
        </div>
    )
}

export default Giphy;