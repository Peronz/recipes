import React, { Component } from 'react'

export class Deserts extends Component {
  render() {
    const {handleIndex} = this.props;
    return (
      <React.Fragment>
      <div>
        Deserts
      </div>
      <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={()=> handleIndex(1)}>
        back to recipe list
        </button>
      </React.Fragment>
    )
  }
}

export default Deserts
