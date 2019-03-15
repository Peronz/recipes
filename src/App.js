import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; 


class App extends Component {
  state = {
    recipes: recipes,
    recipe_id:35382,
    pageIndex: 1,
    search:"",
    query:"&q=",
    error:""
  
  };

  
  displayPage = (index) =>{
    switch(index){
      default:
      case 1:
        return <RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error}/>
      case 0:
        return <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} /> 

    }
  };

  handleIndex = (index) => {
    this.setState({
      pageIndex: index,
    })
  }
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  handleChange = (e) => {
    this.setState({
      search:e.target.value
    },()=>{
      console.log(this.state.search)
    })
    

  }
  handleSubmit = (e) => {
    e.preventDefault();
   
  }

  render() {
    //console.log(this.state.recipes);
    return (
     <React.Fragment>
       {this.displayPage(this.state.pageIndex)}
     </React.Fragment>
    );
  }
}

export default App;
