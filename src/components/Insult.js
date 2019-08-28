import React, { Component } from 'react';
import axios from 'axios'

class Insult extends Component {
    state = {
        quote: ''
    }

    // componentDidMount() {
    //     this.genQuote()
    // }

    genQuote = () => {
        axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
            .then(res => {
                this.setState({
                    quote: res.data.en
                })
            })
    }

    render() {
        return (
            <>
              <h1 id="title">Programming Quotes!</h1>

              <input id="button-container" type="button" value="Generate Quote" onClick={this.genQuote}/>  

              <h2 id="quote-container">{this.state.quote}</h2>
            </>
        );
    }
}

export default Insult;
