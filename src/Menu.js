import React, { Component } from "react";
var faker = require('faker');

class Menu extends Component{

  this.items = [
    {name: "Tacos",price: 35,description:"Mexican chicken tacos",
    img:faker.image.food()
    },
    {name: "Pasta",price: 40,description:"Lasgna made from scratch",
    img:faker.image.food()
    },
    {name: "Pizza",price: 20,description:"Cheese pizza, New York Style",
    img:faker.image.food()
    }
  ];



  render(){

    return();
  }
}

export default Menu;