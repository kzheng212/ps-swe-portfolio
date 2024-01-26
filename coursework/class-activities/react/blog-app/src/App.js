import { Container, Title, Button } from "./styled";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  return (
    <Container>
      <Modal />
      <Title>Blog App</Title>
      <Button>Home</Button>
    </Container>
  );
}

export default App;
