/* eslint-disable no-unreachable */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "./Product.css";

const Product = (props) => {
  const {handleAddToCart, product} = props;
  const { seller, ratings, price, name, img, id } = product;
  return (
    <div>
      <div className="cart">
        <div className="cart-img">
          <img src={img} alt="" />
        </div>
        <div className="cart-body">
          <h3>{name}</h3>
          <h3>Price : ${price}</h3>
          <p>Manufacturer : {seller}</p>
          <p>Rating : {ratings} start</p>
        </div>
        <div className="cart-footer" onClick={()=>{handleAddToCart(props.product)}}>
          <button>Add to cart &ensp;<FontAwesomeIcon icon={faCartPlus}/></button>
        </div>
      </div>
    </div>
  );
};

export default Product;
