import { createPortal } from "react-dom";
import { Container, Header, Nav, Article, Footer } from "../styles/styled";

const Modal = () => {
  return createPortal(
    <Container>
      <Header>
        <h1>
          <a href="#">Sartre's List</a>
        </h1>

        <h3>Better-Dressed People</h3>
      </Header>
      <Nav>
        <ul>
          <li>
            <a href="#">Women's</a>
          </li>
          <li>
            <a href="#">Men's</a>
          </li>
          <li>
            <a href="#">On the Street</a>
          </li>
          <li>
            <a href="#">The Catwalk</a>
          </li>
          <li>
            <a href="#">AdWatch</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </Nav>
      <Footer></Footer>
    </Container>,
    document.getElementById("modal")
  );
};

export default Modal;
