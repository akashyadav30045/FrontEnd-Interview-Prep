import React, { useEffect, useState } from "react";
import "./styles.css";

const LoadMoreData = () => {
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);



  const FetchProducts = async () => {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);
      // check if result is not empty
      if (result && result.products && result.products.length) {
        setproducts((prevData)=> [...prevData,...result.products]);
      }
      setloading(false);   
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    FetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading Data! Please Wait</div>;
  }
  return (
    <div className="container">
      <div className="product-container">
          {products && products.length
            ? products.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt=" item.title" />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className="button-container">
          <button disabled={disableButton} onClick={() =>setcount(count+1)}>Load More Items</button>
          {disableButton ? <p>You have reached to 100 products</p> : null}

        </div>
    </div>
  );
};

export default LoadMoreData;
