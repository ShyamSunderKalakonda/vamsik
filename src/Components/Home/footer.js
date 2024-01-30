import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../../assets/images/logo.png';
import { Image } from 'react-bootstrap';

export default function AppFooter() {
    return(
        <section className='footer'>
        <Container>
      <Row className='links'>
        <Col sm={4}><ul>
                <li><Image src={logo} className='logo1'/></li><br></br>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                
            </ul></Col>

        <Col sm={2}>

            <ul>
                <li><b>COMPANY</b></li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact us</li>
            </ul>
        
        
        </Col>

        <Col sm={2}><ul>
                <li><b>PRODUCTS</b></li>
                <li>Pricing Products</li>
                <li>Web Updates</li>
                <li>Security</li>
                <li>Mobile Apps</li>
            </ul></Col>

        <Col sm={2}><ul>
                <li><b>LEGAL</b></li>
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
            </ul></Col>

            <Col sm={2}>
                <div><b>SOCIAL MEDIA</b></div>
                <div className='icons'>
                <i class="fa-brands fa-facebook"></i><span className='facebook'></span>
                <i class="fa-brands fa-square-instagram"></i><span className='instagram'></span>
                <i class="fa-brands fa-square-twitter"></i><span className='twitter'></span>
                </div>
            </Col>
      </Row>
      <Row><div className='copyright'>@ 2024 Resilient Software Solutiones. All rights reserved.</div></Row>
    </Container>
    </section>
    )
}