import React, { useContext } from "react";
import "./ProductItem.css";
import { assets } from "../../assests/assets";
import { StoreContext } from "../../context/StoreContext";

const ProductItem = ({ id, name, price, description, image }) => {
  const { cartItems, addtoCart, removefromCart } = useContext(StoreContext);
  
  return (
    <div className="ProductItem">
      <div className="Product-Item-Img-container">
        <img className="Product-Item-image" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addtoCart(id)}
            src={assets.add_icon_white}
            alt="Add to Cart"
          />
        ) : (
          <div className="Product-Item-Container">
            <img
              onClick={() => removefromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addtoCart(id)}
              src={assets.add_icon_green}
              alt="Add More"
            />
          </div>
        )}
      </div>

      <div className="Product-Item-details">
        <div className="Product-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="Product-item-desc">{description}</p>
      </div>

      {/* Price section moved to the bottom */}
      <div className="Product-item-price-section">
        <p className="Product-item-Price">
          <span>₹{price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
 