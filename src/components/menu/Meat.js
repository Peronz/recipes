import React, { Component } from 'react'

export class Meat extends Component {
  render() {
    const {handleIndex} = this.props;
    return (
      <React.Fragment>
      <div>

        Meat
        <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={()=> handleIndex(1)}>
        back to recipe list
        </button>
      </div>
      </React.Fragment>
    )
  }
}

export default Meat
