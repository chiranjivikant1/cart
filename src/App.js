import "./App.css";
import Basket from "./Basket";
import PriceData from "./PriceData";
import { Container, Row } from "react-bootstrap";
import Price from "./Price";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  
  return (
    <>
      <Container>
        <Row className="Row">
          {PriceData.map(({ title, rating, price, src, currency }) => {
            return (
              // each component mount call acts as column in Basket component
              <Basket
                title={title}
                rating={rating}
                price={price}
                src={src}
                currency={currency}
                cart={(old) => setValue(old)}
                
              />
            );
          })}
        </Row>
      </Container>
      <Price value={value}  />
    </>
  );
}

export default App;
