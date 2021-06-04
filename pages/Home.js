import React, { useContext } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Paper from "@material-ui/core/Paper";
import Header from "../components/Header";
import Counter from "../components/Counter";
import { CartContext } from "../contexts/Cart";
import "../styles/Home.css";

const books = [
  {
    name: "Harry Potter",
    src: "",
    price: "$70.000"
  },
  {
    name: "Libro 2",
    src: "",
    price: "$55.000"
  },
  {
    name: "Libro 3",
    src: "",
    price: "$71.000"
  },
  {
    name: "Libro 4",
    src: "",
    price: "$60.000"
  },
  {
    name: "Libro 5",
    src: "",
    price: "$60.000"
  },
  {
    name: "Libro 6",
    src: "",
    price: "$63.000"
  }
];

const Home = (props) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <Container>
        <Header title="Nuevos Libros" />
        <Row className="justify-content-center">
          {books.map((book) => (
            <Col xs="6" sm="4" md="3">
              <Paper>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={book.src}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>
                      <div className="name">{book.name}</div>
                    </CardTitle>
                    <CardSubtitle>{book.price}</CardSubtitle>
                    <CardSubtitle>
                      <Counter />
                      <Button onClick={() => addToCart(book)}>
                        <AddShoppingCartIcon />
                      </Button>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Paper>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Header title="Mas Vendidos" />
        <Row className="justify-content-center">
          {books.map((book) => (
            <Col xs="6" sm="4" md="3">
              <Paper>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={book.src}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>
                      <div className="name">{book.name}</div>
                    </CardTitle>
                    <CardSubtitle>{book.price}</CardSubtitle>
                    <CardSubtitle>
                      <Counter />
                      <Button onClick={() => addToCart(book)}>
                        <AddShoppingCartIcon />
                      </Button>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Paper>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
