import React from "react";
import axios from "axios";

class NewBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewer_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", this.state)
      .then(response => {
        console.log(response);
        this.setState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewer_tips: "",
          attenuation_level: 0,
          contributed_by: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChange}
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />

        <label>First Brewed:</label>
        <input
          type="text"
          name="first_brewed"
          value={this.state.first_brewed}
          onChange={this.handleChange}
        />

        <label>Brewer Tips:</label>
        <input
          type="text"
          name="brewer_tips"
          value={this.state.brewer_tips}
          onChange={this.handleChange}
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          value={this.state.attenuation_level}
          onChange={this.handleChange}
        />

        <label>Contributed By:</label>
        <input
          type="text"
          name="contributed_by"
          value={this.state.contributed_by}
          onChange={this.handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewBeer;
