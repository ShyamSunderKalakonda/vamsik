import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import logo from '../../assets/images/logo.png';
import { Image } from 'react-bootstrap';

export default function AppHeader() {
    return (
        

<Navbar expand="lg" className="bg-body-tertiary">
      <Container className='header-block justify-content-between'>

        <Navbar.Brand href="#home"><Image src={logo} className='logo'/></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
          <Nav className="me-auto">

            <NavDropdown title="OUR SERVICES" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">Production Accounting</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">Payroll</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">ACA</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">Budget</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">Calendar</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">clients</Nav.Link>
            <Nav.Link href="#link">Support</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
   
          </Nav>
        </Navbar.Collapse>

            <Button variant="primary">Login    <i class="fa-solid fa-angle-right"></i></Button>

    </Container>
</Navbar>
    

        
    )
}