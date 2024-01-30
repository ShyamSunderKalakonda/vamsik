import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import side from '../../assets/images/side.png';
import Image from 'react-bootstrap/Image';

export default function AppSave() {
    return(
        <section className='savetime'>
        <Container>
      <Row>
        <Col sm={6}>
           <h1 className='heading2'>Save Time & Money with Automated Payroll</h1>
           <p className='longtext2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
           <div className='button2'><Button variant="primary">Explore more    <i class="fa-solid fa-angle-right"></i></Button></div>
         </Col>
        
        <Col sm={6}><div className='side'><Image src={side} className='side'/></div></Col>
      
      </Row>
    </Container>
    </section>

    )
}