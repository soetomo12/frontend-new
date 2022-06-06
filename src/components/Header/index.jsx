import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "../../style.css";

const token = localStorage.getItem("token");
const email2 = localStorage.getItem("email");


const Header = () => {
  if (email2 && token) {
    return (
      <>
        <Navbar key="lg" sticky="top" className="nav-background" expand="lg">
        <Container>
          <Navbar.Brand className="mt-1">
            <img src="/images/Home/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="justify-content-end">
              <Nav >
                <Nav.Link className="me-2" href="#OurServices">Our Services</Nav.Link>
                <Nav.Link className="me-2" href="#WhyUs">Why Us</Nav.Link>
                <Nav.Link className="me-2" href="#Testimonial">Testimonial</Nav.Link>
                <Nav.Link className="me-2" href="#FAQ">FAQ</Nav.Link>
                <Button className="fw-bold text-white" id="btn-register" href="/register">{email2}</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      </>
    );
  }else{
    return (
      <>
        <Navbar key="lg" sticky="top" className="nav-background" expand="lg">
        <Container>
          <Navbar.Brand className="mt-1">
            <img src="/images/Home/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="justify-content-end">
              <Nav >
                <Nav.Link className="me-2" href="#OurServices">Our Services</Nav.Link>
                <Nav.Link className="me-2" href="#WhyUs">Why Us</Nav.Link>
                <Nav.Link className="me-2" href="#Testimonial">Testimonial</Nav.Link>
                <Nav.Link className="me-2" href="#FAQ">FAQ</Nav.Link>
                <Button className="fw-bold text-white" id="btn-register" href="/register">Register</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      </>
    );
  }
};

export default Header;