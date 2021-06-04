import React from "react";
import { Row, Col } from "reactstrap";
import "../styles/Footer.css";
import "../public/MetodoPago.JPG";

export default function () {
  return (
    <div className="Footer">
      {/* <Container className="text-white bg-dark"> */}
      <Row className="text-white bg-dark mt-4 pt-4 pb-4">
        <Col sm="6" md="2" className="mb-3">
          <h5>Explorar</h5>
          <div>
            <a href="/404">Nosotros</a>
          </div>
          <div>
            <a href="/404">Categorias</a>
          </div>
          <div>
            <a href="/404">Novedades</a>
          </div>
          <div>
            <a href="/404">Iniciar Sesion</a>
          </div>
        </Col>
        <Col sm="6" md="2" className="mb-3">
          <h5>Centro de Ayuda</h5>
          <div>
            <a href="/404">Ayuda</a>
          </div>
          <div>
            <a href="/404">Contactanos</a>
          </div>
          <div>
            <a href="/404">Donde esta mi pedido?</a>
          </div>
          <div>
            <a href="/404">Hasta donde hacen envios?</a>
          </div>
        </Col>
        <Col sm="6" md="2" className="mb-3">
          <h5>Datos Importantes</h5>
          <div>
            <a href="/404">Cookies</a>
          </div>
          <div>
            <a href="/404">Politica de Privacidad</a>
          </div>
          <div>
            <a href="/404">Terminos y Condiciones</a>
          </div>
          <div>
            <a href="/404">Compra Segura</a>
          </div>
          <div>
            <a href="/404">Accesibilidad</a>
          </div>
        </Col>
        <Col md="3" className="mb-3 justify-content-center">
          <div>Aceptamos estos metodos de pago!</div>
          <img src="MetodoPago.JPG" width="300" alt="MetodosPago" />
          <div>© 2021 Libreria Nacional</div>
          <div>Todos los derechos reservados</div>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}
