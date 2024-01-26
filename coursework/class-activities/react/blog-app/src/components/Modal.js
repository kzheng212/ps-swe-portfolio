import { createPortal } from "react-dom";
import { Container, Title, Button } from "../styled";

const Modal = () => {
  return createPortal(
    <Container>
      <Title>Modal</Title>
      <p>Hello Bloggers</p>
      <Button>Sign Up!</Button>
    </Container>,
    document.getElementById("modal")
  );
};

export default Modal;
