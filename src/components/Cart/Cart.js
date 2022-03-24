import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.details[4]);

  const [totalPrice, totalShippingCharge, Tex, total, cart] = props.details;
  let quantity = 0;
  for (const item of cart) {
    quantity = quantity + item.quantity;
  }
  return (
    <div>
      <div className="shoppingCart-container">
        <h1 className="header-1">Order Summary</h1>
        <div className="shoppingCart-details">
          <p>
            Total Item : <span className="bold-text">{quantity}</span>{" "}
          </p>
          <p>
            Total Price : $<span className="bold-text">{totalPrice}</span>{" "}
          </p>
          <p>
            Total Shipping Charge : $
            <span className="bold-text">{totalShippingCharge}</span>
          </p>
          <p>
            Tax : $<span className="bold-text">{Tex}</span>{" "}
            <small>(15% Vat)</small>{" "}
          </p>
        </div>
        <h1 className="header-1">
          Grand Total : $<span className="bold-text">{total}</span>
        </h1>
        <div className="shoppingCart-footer">
          <button className="clear-btn">
            Clear Cart &ensp;
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button className="order-btn">
            Review Order &ensp;
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
