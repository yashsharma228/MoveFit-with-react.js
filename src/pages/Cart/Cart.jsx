import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
const Cart = () => {
  const { cartItems, Product_list, removefromCart, getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="cart" id="cart-Section">
      <div className="cart-Items">
        <div className="cart-Items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Product_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-Items-title cart-Items-Item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removefromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-Bottom">
        <div className="cart-Total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-Total-details">
              <p>SubTotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <div className="cart-Total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <div className="cart-Total-details">
              <p>Total</p>
              <b>{getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="Cart-Promocode">
          <div>
            <p>If you have a promocode, Enter it here </p>
            <div className="cart-Promocode-Input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
