import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
import Menu from './menu/Menu';
export class RecipeList extends Component {
  
  render() {
    const {recipes, handleDetails, value, handleSubmit, handleChange, error, handleIndex } = this.props;
    return (
        <React.Fragment> 
        <button type="button"
          className="btn btn-primary text-capitalize" onClick={()=>handleIndex(3)}
          >Contact us</button>
        <button type="button"
          className="btn btn-danger text-capitalize" style={{float: 'right'}} onClick={()=>handleIndex(4)}
          >Support us for more interesting recipes</button>  
        <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Menu handleIndex={handleIndex} />
          <div className="container my-5">
          {/*title*/}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                <h1 className="text-slanted">recipe list</h1>
              </div>
            </div>
          {/* end of title*/}
            <div className="row">
            {error ? ( 
              <h1 className="text-danger text-center">
            {error}</h1> 
            ) : (
              recipes.map( recipe => {
                  return (<Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={handleDetails} />
                  );
                })       
              )}
            </div>
          </div>
        
        

    </React.Fragment>
    )
  }
}

export default RecipeList
