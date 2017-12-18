import React, { Component } from "react";
var faker = require("faker");

let items = [
  {
    name: "Tacos",
    price: 35,
    description: "Mexican chicken tacos",
    img: faker.image.food(),
    category: "appetizer"
  },
  {
    name: "Pasta",
    price: 40,
    description: "Lasgna made from scratch",
    img: faker.image.food(),
    category: "main"
  },
  {
    name: "Pizza",
    price: 20,
    description: "Cheese pizza, New York Style",
    img: faker.image.food(),
    category: "main"
  },
  {
    name: "Souffle",
    price: 50,
    description: "A dessert",
    img: faker.image.food(),
    category: "dessert"
  }
];

const MenuList = ({ items, category }) => {
  return (
    <div id="menu" className="container">
      <div className="menu">
        <div class="row nav nav-tabs bg-success">{category}</div>
        {items.map(item => {
          return (
            <div className="row rows_same">
              <div class="col-md-3">{item.name}</div>
              <div class="col-md-3">{item.description}</div>
              <div class="col-md-3">{item.price}</div>
              <div class="col-md-3">
                <img height="200" width="200" src={item.img} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

let categories = ["appetizer", "main", "dessert"];
categories = categories.map(category => {
  let foodArr = [];
  items.forEach(item => {
    if (item.category === category) {
      foodArr.push(item);
    }
  });
  return foodArr;
});

class Menu extends Component {
  render() {
    return (
      <div>
        <MenuList items={categories[0]} category="Appetizer" />
        <MenuList items={categories[1]} category="Main" />
        <MenuList items={categories[2]} category="Dessert" />
      </div>
    );
  }
}

export default Menu;
