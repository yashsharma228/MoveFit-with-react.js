import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assests/assets";
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Product</h1>
      <p className="Explore-menu-Text">
        Elevate Your Fitness Game, Discover Top Products Now.
      </p>
      <div className="Explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="Explore-menu-list-item" key={index}>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu; 
