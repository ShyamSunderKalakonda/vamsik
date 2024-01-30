import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Image from 'react-bootstrap/Image';
import mobile from '../../assets/images/mobile.png';
import googleplay from '../../assets/images/googleplay.png';
import appstore from '../../assets/images/appstore.png';


export default function AppMobile() {
    return(
        <section className="mobile">
        <Container>
      <Row>
        <Col sm={4}><div><Image src={mobile} className='image1'/></div></Col>
        
        <Col sm={8}>

            <h1 className='heading3'>Timesheet in your hands with our mobile app</h1>
            <p className='longtext3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            <div><Button variant="primary" className='btn'>Explore more    <i class="fa-solid fa-angle-right"></i></Button></div>

            <div className='social'>
                <Image src={googleplay} className='googleplay'/>
                <Image src={appstore} className='appstore'/>
            </div>
            


        </Col>
      </Row>
    </Container>
    </section>
    )
}