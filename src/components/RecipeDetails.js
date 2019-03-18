import React, { Component } from 'react';
import {recipe} from '../tempDetails';


export class RecipeDetails extends Component {
  state ={
    recipe: recipe
  };
  
  render() {
    const{  image, title, ingredients} = this.state.recipe;
    const{handleIndex} = this.props
    return (
        <React.Fragment>
        <div className="container">
        <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
        <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={()=> handleIndex(1)}>
        back to recipe list
        </button>
        <img src={image} className="d-block w-100" alt="recipes" />
        
        <button type="button" className="btn btn-info mt-5 text-capitalize" onClick={()=> handleIndex(2)}>
          preparation details
        </button>
        
        </div>
        <div className="col-10 mx-auto col-md-6 my-3">
          <h5 className="text-uppercase" style={{color:"red", fontSize:"40px"}}>{title}</h5>
         
         
         
          <ul className="list-group mt-4">
          <h2 className="mt-3 mb-4">Ingredients</h2>
          {
            ingredients.map((item, index) => {
              return(
                <li key={index} className="list-group-item text-slanted">
                {item}
                </li>
              )
            })
          }
          </ul>
          
        </div>
        </div>
        </div>

        </React.Fragment>
    )
  }
}

export default RecipeDetails;
