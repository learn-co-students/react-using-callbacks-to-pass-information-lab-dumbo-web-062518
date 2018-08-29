import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state ={
      selectedColor: '#FFF'
    }
  }

  assignSelectedColor = (colorString) => {
    this.setState({selectedColor: colorString})
  }

  displaySelectedColor = () => {
    return  this.state.selectedColor
  }



  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val}  colorSelected={this.displaySelectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector assignColor={this.assignSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}

// export function assignSelectedColor(colorString){
//   console.log(colorString)
//   this.setState({
//     selectedColor: colorString
//   })
// }
