import React, { useContext } from "react";
import "./ProductDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem"; // Ensure proper import path

const ProductDisplay = ({ category }) => {
  const { Product_list } = useContext(StoreContext);
  return (
    <div className="product-display" id="product-display">
      <div className="Product-Display-list">
        {Product_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;
