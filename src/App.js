import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; 
import PreparationDetails from './components/PreparationDetails';
import Contact from './components/Contact';
import Support from './components/Support';
import Deserts from './components/menu/Deserts';
import Meat from './components/menu/Meat';
import Fish from './components/menu/Fish';
import Healthy from './components/menu/Healthy';
import Soups from './components/menu/Soups';
import Special from './components/menu/Special';
import Diet from './components/menu/Diet';




class App extends Component {
  state = {
    recipes: recipes,
    recipe: recipes,
    details_id:0,
    pageIndex: 1,
    search:"",
    query:"&q=",
    error:""
  
  };

 

  
  displayPage = (index) =>{
    switch(index){
      default:
      case 1:
        return <RecipeList recipes={this.state.recipes} getRecipes={this.getRecipes} handleDetails={this.handleDetails} handleIndex={this.handleIndex} value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error}/>
      case 0:
        return <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} /> 
      case 2:
        return <PreparationDetails handleIndex={this.handleIndex}/>
      case 3:
        return <Contact handleIndex={this.handleIndex}/>
      case 4:
        return <Support handleIndex={this.handleIndex}/>
      case 5:
        return <Diet handleIndex={this.handleIndex}/> 
      case 6:
        return <Special handleIndex={this.handleIndex}/> 
      case 7:
        return <Healthy handleIndex={this.handleIndex}/> 
      case 8:
        return <Meat handleIndex={this.handleIndex}/> 
      case 9:
        return <Soups handleIndex={this.handleIndex}/> 
      case 10:
        return <Fish handleIndex={this.handleIndex}/> 
      case 11:
        return <Deserts handleIndex={this.handleIndex}/>       

    }
  };

  getRecipes(){
    try { 
      recipes.map( recipe => {
        return (<RecipeList recipes={this.state.recipes} getRecipes={this.getRecipes} handleDetails={this.handleDetails} value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error}/>
        );
      })
    } catch (error){
      console.log(error);
    }

  }

  componentDidMount(){
    this.getRecipes();
  }

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
    const{recipe, query, search} = this.state;
  this.setState(()=>{
    return {recipes:`${recipe}${query}${search}`, search:''};
  },()=>{
    this.getRecipes();
  })  
   
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
