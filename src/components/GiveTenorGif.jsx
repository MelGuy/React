import React from "react";
import axios from "axios";

class TenorGif extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : '',
            gif : [],
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const ApiKey = "R2F716OA9WT9";
        
        axios.get(`https://g.tenor.com/v1/search?key=${ApiKey}&q=${this.state.text}`).then(res => {
            const data = res.data;
            const data1 = data.results;
            console.log(data);
            console.log(data1);
            const result = data1.map(d => ([ d.media[0].gif.url ]));
 
            this.setState({
                // gif: result
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
                <h1>TENOR</h1>
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

export default TenorGif;