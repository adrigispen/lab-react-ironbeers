import React, { Component } from "react";
import axios from "axios";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = { beer: {} };
  }

  componentDidMount() {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(response => {
        this.setState({ beer: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3>Random Beer:</h3>
        <h1>{this.state.beer.name}</h1>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.description}</p>
      </div>
    );
  }
}

export default RandomBeer;
