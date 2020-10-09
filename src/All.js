import React, { useState, useEffect } from "react";
import axios from "axios";
import "./all.css";

const All = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://okukus.com/api_call/get_books.php");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  let content = products.map(
    ({ unique_id, unit_price, product_name, cover_photo_url }) => (
      <View
        key={unique_id}
        id={unique_id}
        unit_price={unit_price}
        cover_photo_url={cover_photo_url}
        product_name={product_name}
      />
    )
  );

  let view;

  if (content.length === 0) {
    view = <div>Loading.....</div>;
  } else {
    view = <> {content}</>;
  }

  return (
    <div className="p-1 body-background">
      <div className="wrapper">{view}</div>
    </div>
  );
};

export default All;

const View = (props) => {
  return (
    <div className=" product ">
      <div className="product_link">
        <div className=" text-center">
          <img
            src={`https://okukus.com/${props.cover_photo_url}`}
            alt=""
            className="product-image"
          />
        </div>
​
        <div className="product-name">{props.product_name}</div>
​
        <div className="buy_button">
          <button className="price">₵{props.unit_price}</button>
        </div>
      </div>
    </div>
  );
};