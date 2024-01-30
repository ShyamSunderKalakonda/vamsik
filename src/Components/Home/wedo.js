import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

export default function AppWedo() {
    return(

        <section className='wedo'>
        <Container>
            <div>
      <Row>
        <Col sm={5}><h1 className='heading1'>What we do</h1></Col>
        <Col sm={7}>
            <div className='title'>Our powerful software, supported by proven knowledge and experience</div>
        <p className='longtext1'>RSSL stands out as an intelligent production payroll and accounting platform crafted by seasoned industry professionals.</p>
        <div className='button1'><Button variant="primary">Explore more    <i class="fa-solid fa-angle-right"></i></Button></div>
        </Col>
      </Row>
      </div>
    </Container>
    </section>

    )
}