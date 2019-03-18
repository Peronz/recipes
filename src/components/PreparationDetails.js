import React, { Component } from 'react'
import {recipe} from '../tempDetails';

export class PreparationDetails extends Component {
    state = {
        recipe: recipe
    }
  render() {
      const {image} = this.state.recipe
      const {handleIndex} = this.props
    return (
        <React.Fragment>
        <ul className="list-group mt-4">
        <h1 className="mt-3 mb-4">PREPARATION DETAILS</h1>
        <img src={image} className="d-block w-50" alt="recipes" />
        </ul>
        <button type="button" className="btn btn-warning mt-3 text-capitalize" onClick={()=> handleIndex(1)}>
        back to recipe list
        </button>
        <button type="button" className="btn btn-success mt-3 mx-5 text-capitalize" onClick={()=> handleIndex(0)}>
        back to ingredients
        </button>
        </React.Fragment>
    )

  }
}

export default PreparationDetails
