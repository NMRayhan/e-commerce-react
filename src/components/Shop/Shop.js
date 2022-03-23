import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { getShipping, getTexCalculation, getTotalGrandPrice, getTotalPrice } from "../../utilities/Calculation";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(cart);
  };

  const totalPrice = getTotalPrice(cart);
  const totalShippingCharge = getShipping(cart);
  const Tex = getTexCalculation(totalPrice, totalShippingCharge);
  const total = getTotalGrandPrice(totalPrice, totalShippingCharge, Tex) ;


  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {Products.map((pd) => (
            <Product
              product={pd}
              key={pd.id}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="shoppingCart-container">
          <h1 className="header-1">Order Summary</h1>
          <div className="shoppingCart-details">
            <p>Total Item : <span className="bold-text">{cart.length}</span> </p>
            <p>Total Price : $<span className="bold-text">{totalPrice}</span> </p>
            <p>Total Shipping Charge : $<span className="bold-text">{totalShippingCharge}</span></p>
            <p>Tax : $<span className="bold-text">{Tex}</span> <small>(15% Vat)</small> </p>
          </div>
          <h1 className="header-1">Grand Total : $<span className="bold-text">{total}</span></h1>
          <div className="shoppingCart-footer">
            <button className="clear-btn">Clear Cart &ensp;<FontAwesomeIcon icon={faTrashCan}/></button>
            <button className="order-btn">Review Order &ensp;<FontAwesomeIcon icon={faArrowRight}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
