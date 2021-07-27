import React, { useState } from "react";

import { Col, Button } from "react-bootstrap";

function fun(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("⭐");
  }
  return arr.join("");
}

function Basket(props) {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount((count) => count + 1);
    
    props.cart(count);
  };

  const decounter = () => {
    setCount((count) => count - 1);
    
    props.cart(count);
  };

  const { title, rating, price, src, currency } = props;
  return (
    <>
      <Col>
        <div className="border1 col">
          <img className="card-img-top" src={src} alt="..." />
          <div className="card-body">
            <h1 className="card-title"> {title}</h1>
            <h4>{fun(rating)}</h4>
            <h4>
              {" "}
              {currency}
              {price}
            </h4>
            <Button onClick={counter} variant="primary">
              Add to cart
            </Button>
            <Button onClick={decounter} variant="danger">
              Remove from cart
            </Button>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Basket;
