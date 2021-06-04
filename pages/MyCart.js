import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/MyCart.scss";
import { CartContext } from "../contexts/Cart";

export default function () {
  return (
    <div>
      <Container className="mt-2">
        <Row>
          <Col md="6" className=" mt-3">
            <CartContext.Consumer>
              {({ cartItems }) => (
                <div className="">
                  {cartItems.map((item) => (
                    <div className="d-flex border">
                      <img src={item.src} className="limg" alt="libro" />
                      <div className="text">
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <CartContext.Consumer>
                          {({ removeFromCart }) => (
                            <Button
                              color="primary"
                              onClick={() => removeFromCart(item)}
                            >
                              Quitar del Carrito
                            </Button>
                          )}
                        </CartContext.Consumer>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CartContext.Consumer>
          </Col>
          <Col md="5" className="mt-3">
            <div className="border mb-3 p-2">
              <div className="border-bottom">Total : $80.000</div>
              <div>Couta de Envio: $5.000</div>
            </div>
            <a href="/checkout" className="btn btn-danger w-100" role="button">
              Ordenar
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
