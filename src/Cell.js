import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  changeColor = () => {
    const newcolor = this.props.getCurrentColor()
    console.log(`changing pixel to ${newcolor}!`)
    this.setState({
      color: newcolor
    })
  }

  render() {
    return (
      <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}

Cell.defaultProps = {

}
