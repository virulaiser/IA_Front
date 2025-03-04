import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavBarNa() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ChatBot - Preguntale a tito</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">NACHO SIUTTO</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


