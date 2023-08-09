import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {
  return (
    <>
    <header>
    <Container className='headerCont' fluid>
    <h1>Daily <span>Articals</span></h1>
    </Container>
        
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" data-bs-theme="dark" expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Daily Articles</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Category
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/technology">Technology</Nav.Link>
                  <Nav.Link href="/sports">Sports</Nav.Link>
                  <Nav.Link href="/politics">Politics</Nav.Link>
                  <Nav.Link href="/health">Health</Nav.Link>
                  <Nav.Link href="/singup">Sign up</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
      </header>
    </>
  );
}

export default Navigation;