import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default function () {
  return (
    <Container className="mt-4">
      <Row>
        <Col md="6">
          <Form>
            <FormGroup>
              <Label for="name">Nombre del Libro</Label>
              <Input
                type="text"
                name="lnname"
                id="name"
                placeholder="Nombre del Libro"
              />
            </FormGroup>
            <FormGroup>
              <Label for="author">Autor</Label>
              <Input
                type="text"
                name="lnauthor"
                id="author"
                placeholder="Autor del Libro"
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Precio ($)</Label>
              <Input
                type="text"
                name="lnprice"
                id="price"
                placeholder="22.000"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Descripcion</Label>
              <Input
                type="textarea"
                name="lndescription"
                id="description"
                placeholder="Descripcion Detallada"
              />
            </FormGroup>
            <FormGroup>
              <Label for="categories">Categorias</Label>
              <Input
                type="textarea"
                name="lncategories"
                id="categories"
                placeholder="Categorias Detalladas"
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">Imagen</Label>
              <Input type="file" name="lnimage" id="image" />
            </FormGroup>

            <Button>Crear</Button>
          </Form>
        </Col>
        <Col md="6" className="mt-2">
          <img
            width="400px"
            className="d-none d-md-block"
            src="urldelaimagenxD"
            alt="imagen1"
          />
        </Col>
      </Row>
    </Container>
  );
}
