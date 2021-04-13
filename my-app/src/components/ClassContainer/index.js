import React, { Component } from "react";
import Button from "../ClassButton/index";

class Container extends Component {
  inputValue = "";
  state = {
    message: "",
  };

  handleInputChange(e) {
    this.inputValue = e.target.value;
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      message: this.inputValue,
    });
    e.target.reset();
  }

  render() {
    return (
      <Button
        handleInputChange={this.handleInputChange.bind(this)}
        onSubmit={this.onSubmit.bind(this)}
      >
        {this.state.message}
      </Button>
    );
  }
}
export default Container;
