import React, { Component } from 'react';


export class Menu extends Component {
    constructor(){
        super();
       
        this.state = {
              displayMenu: false,
            };
       
         this.showDropdownMenu = this.showDropdownMenu.bind(this);
         this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
       
       };
       
       showDropdownMenu(event) {
           event.preventDefault();
           this.setState({ displayMenu: true }, () => {
           document.addEventListener('click', this.hideDropdownMenu);
           });
         }
       
         hideDropdownMenu() {
           this.setState({ displayMenu: false }, () => {
             document.removeEventListener('click', this.hideDropdownMenu);
           });
       
         }
       
         render() {
             const {handleIndex} = this.props;
           return (
               <div className="container" style={{ marginLeft:"40%"}}> 
               <div  className="dropdown" style = {{alignItems:"center", background:"red", width:"200px", display:"block" }} >
                <div className="button" style = {{boxSizing: "border-box",color: "white", fontSize:"20px", textAlign:"center", background:"red", width:"200px", display:"block" }} onClick={this.showDropdownMenu}> Menu</div>
       
                 { this.state.displayMenu ? (
                 <ul>
                <li><button onClick={()=>handleIndex(11)} style={{width:"100%"}}>Deserts</button></li>
                <li><button onClick={()=>handleIndex(5)} style={{width:"100%"}}>Diet</button></li>
                <li><button onClick={()=>handleIndex(10)} style={{width:"100%"}}>Fish</button></li>
                <li><button onClick={()=>handleIndex(7)} style={{width:"100%"}}>Healthy</button></li>
                <li><button onClick={()=>handleIndex(8)} style={{width:"100%"}}>Meat</button></li>
                <li><button onClick={()=>handleIndex(9)} style={{width:"100%"}}>Soups</button></li>
                <li><button onClick={()=>handleIndex(6)} style={{width:"100%"}}>Special</button></li>
                 </ul>
               ):
               (
                 null
               )
               }
       
              </div>
              </div> 
       
           );
         }
       }

export default Menu
