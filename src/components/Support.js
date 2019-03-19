import React, { Component } from 'react'

export class Support extends Component {
  render() {
    const {handleIndex} = this.props;
    return (
      <React.Fragment>
      <div>
        <h1>Hi there!!!</h1>
      </div>
       <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={()=> handleIndex(1)}>
       back to recipe list
       </button>
       </React.Fragment>
    )
  }
}

export default Support
