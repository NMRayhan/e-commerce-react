/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  getShipping,
  getTexCalculation,
  getTotalGrandPrice,
  getTotalPrice,
} from "../../utilities/Calculation";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const storeCart = getStoredCart();
    const cartProduct=[];
    for (const id in storeCart) {
      const addedProduct = Products.find((pd) => pd.id === id);
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        cartProduct.push(addedProduct);
      }
    }
    setCart(cartProduct);
  }, [Products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  const totalPrice = getTotalPrice(cart);
  const totalShippingCharge = getShipping(cart);
  const Tex = getTexCalculation(totalPrice);
  const total = getTotalGrandPrice(totalPrice, totalShippingCharge, +Tex);

  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {Products.map((pd) => (
            <Product
              product={pd}
              key={pd.id}
              handleAddToCart={(product) => handleAddToCart(product)}
            />
          ))}
        </div>
        <div>
          <Cart
            details={[totalPrice, totalShippingCharge, Tex, total, cart]}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
