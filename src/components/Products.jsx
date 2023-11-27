import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import Aos from "aos";
import "aos/dist/aos.css";
const Products = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = product => {
    // we have to store this product into the store
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map(product => (
        <div className="card" key={product.id} data-aos="flip-left">
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
