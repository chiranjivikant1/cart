function Price(props) {
  return (
    <>
      <div className="cart">
        <img
          src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png"
          height="50px"
          width="50px"
          alt="basket icon"
        ></img>
        <h1>
          {props.title} value is {props.value}{" "}
        </h1>
      </div>
    </>
  );
}

export default Price;
