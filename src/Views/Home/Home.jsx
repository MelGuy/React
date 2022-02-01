import React from "react";
import Navbar from "../../components/NavBar";
import { Link } from "react-router-dom";


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    } 

    render(){
        return(
            <>
            <header>
                <Navbar/>
                <div className="Homebtn">
                    <Link to="/Giphy">
                        <button>Giphy</button>
                    </Link>
                    <Link to="/Tenor">
                        <button>GipTenorhy</button>
                    </Link>
                </div>
            </header>
        </>
        )
    }

}

export default Home;