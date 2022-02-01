import axios from "axios";
import React from "react";


class GiphyGif extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : '',
            gif : [],
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const ApiKey = "YG9robqXLTpDfMEH3U4D77XL1B9mTGaq";
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.text}&limit=24&api_key=${ApiKey}`).then(res => {
                const data = res.data;
               
                const result = data.data.map(d => ([ d.images.original.url ]));
                
                this.setState({
                    gif: result
                });
                console.log(this.state.gif);
            })
            
    }
    onSearchChange = (event) =>{
        this.setState({
            text : event.target.value
        })
    }
    getItems() {
        let final = [];
        this.state.gif.forEach(element => {
            final.push(<img key={element} src={element} alt="img" />);
        })
        return final;
    }


    render(text){
        return(
            <div>
                <h1>Giphy !</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                <label htmlFor="search">Search</label>
                <input  type="search" 
                        value={text}
                        onChange={this.onSearchChange}
                        name="search" 
                        ref={(input) => this.query = input}
                        placeholder="Search..." />
                <input type="submit" value="btn" />
            </form>
                {this.getItems()}
            </div>
        )
    }
}
export default GiphyGif;

