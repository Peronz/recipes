import React, { Component } from 'react'

export class Special extends Component {
  render() {
    const {handleIndex} = this.props;
    return (
      <React.Fragment>
      <div>
        Special
        <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={()=> handleIndex(1)}>
        back to recipe list
        </button>
      </div>
      </React.Fragment>
    )
  }
}

export default Special
