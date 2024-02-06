import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { DivTag, Container } from "./StyledComponents/StyledHeader";
import "./App.css";

function App() {
  return (
    <Container>
      <DivTag>
        <Header></Header>
        <Article></Article>
        <Footer></Footer>
      </DivTag>
    </Container>
  );
}

export default App;
