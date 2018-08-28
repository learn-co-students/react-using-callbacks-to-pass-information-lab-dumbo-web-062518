import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = color => {
    this.setState({color: color()})
    // console.log(color())
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => this.handleClick(this.props.matrixColor)}>
      </div>
    )
  }

}
