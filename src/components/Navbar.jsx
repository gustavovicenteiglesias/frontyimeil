import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample({usuario=false}) {


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Ymail</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {usuario&&<Nav.Link href="/entradas">Bandeja de entrada</Nav.Link>}
            {usuario&&<Nav.Link href="/enviar">Enviar mensaje</Nav.Link>}
          </Nav>
          <Nav>
            {usuario?<Nav.Link href="/logout">Logout</Nav.Link>:<Nav.Link href="/login">Login</Nav.Link>}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;