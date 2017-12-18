import React, { Component } from "react";
var faker = require("faker");

let items = [
  {
    name: "Tacos",
    price: 35,
    description: "Mexican chicken tacos",
    img: faker.image.food()
  },
  {
    name: "Pasta",
    price: 40,
    description: "Lasgna made from scratch",
    img: faker.image.food()
  },
  {
    name: "Pizza",
    price: 20,
    description: "Cheese pizza, New York Style",
    img: faker.image.food()
  }
];

const MenuList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li>
            {item.name} <br /> {item.description} <br /> {item.price}
          </li>
        );
      })}
    </ul>
  );
};

class Menu extends Component {
  render() {
    return <MenuList items={items} />;
  }
}

export default Menu;
