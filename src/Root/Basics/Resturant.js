import React, { useState } from 'react'
import "./style.css";
import Menu from './Api.js';
import MenuCard from "./MenuCard.js";

const uniqueList = [
    ...new Set(Menu.map((curElem) => {
    return curElem.category
}))
];

console.log(uniqueList);

const Resturant = () => {
    const [menuData, setMenuData] = React.useState(Menu);
    
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) =>{
            return curElem.category === category;
        });

        setMenuData(updatedList);
    };

    return (
     <>
      <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
            <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
            <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
            <button className='btn-group__item' onClick={() => filterItem("desserts")}>Desserts</button>
            <button className='btn-group__item' onClick={() => setMenuData(Menu)}>ALL</button>
        </div>
      </nav>
      <MenuCard menuData={menuData}/>;
     </>
  )
}

export default Resturant
