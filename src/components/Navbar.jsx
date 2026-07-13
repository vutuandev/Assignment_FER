import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar as BsNavbar, Nav, Container, Badge } from 'react-bootstrap';

const Navbar = () => {
  // LO8: Use Redux to manage global state and display a state summary
  const { items } = useSelector((state) => state.products);

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow">
      <Container>
        <BsNavbar.Brand as={Link} to="/">LaptopStore</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/feature">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item className="d-flex align-items-center text-light">
              Total Products: <Badge bg="primary" className="ms-2 fs-6">{items.length}</Badge>
            </Nav.Item>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};
export default Navbar;
