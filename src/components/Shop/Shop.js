import React, { useEffect, useState } from "react";
import { getShipping, getTexCalculation, getTotalGrandPrice, getTotalPrice } from "../../utilities/Calculation";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // const handleAddToCart = (product) => setCart([...cart, product]);

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
              handleAddToCart={(product) => setCart([...cart, product])}
            />
          ))}
        </div>
        <div>
          <Cart details={[totalPrice, totalShippingCharge, Tex, total, cart]}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
