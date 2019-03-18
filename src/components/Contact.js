import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {
  render() {
      const {handleIndex} = this.props
    return (
      <React.Fragment>
        <div className="container">
            <h1 className="brand"><span>ComCo</span> Recipes </h1>
            <div className="wrapper animated bounceInLeft">
            <div className="company-info">
                <h3>ComCo Recipes</h3>
                <ul>
                <li><i className="fa fa-envelope"></i><a href="mailto:komljenovic.petar09@gmail.com"> Email: komljenovic.petar09@gmail.com </a></li>
                </ul>
            </div>
            <div className="contact">
                <h3>Send us an e-mail</h3>
                <form>
                <p>
                    <label>First Name</label>
                    <input type="text" name="name"/>
                </p>
                <p>
                    <label>Last Name</label>
                    <input type="text" name="company"/>
                </p>
                <p>
                    <label>E-mail</label>
                    <input type="email" name="email"/>
                </p>
                <p className="full">
                    <label>Message</label>
                    <textarea name="message" rows="5"></textarea>
                </p>
                <p className="full">
                    <button>Send</button>
                </p>
                <p className='full'>
                <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={()=> handleIndex(1)}>
                    back to recipe list
                </button>
                </p>
                </form>
            </div>
            </div>
        </div>
      </React.Fragment>  
    
        
      
    )
  }
}

export default Contact
