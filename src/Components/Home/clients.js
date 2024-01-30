import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


import Image from 'react-bootstrap/Image';
import one from '../../assets/images/one.jpg';
import two from '../../assets/images/two.jpg';
import three from '../../assets/images/three.jpg';
import four from '../../assets/images/four.jpg';
import five from '../../assets/images/five.jpg';
import six from '../../assets/images/six.jpg';
import seven from '../../assets/images/seven.jpg';
import eight from '../../assets/images/eight.jpg';


export default function AppClients() {

    const logos = [
        one,two,three,four,five,six,seven,eight
            ]

    return(

        <section className='clients'>
        <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>

        <Col>
          <Nav variant="pills" className='navigation'>
            <Nav.Item><Nav.Link eventKey="first" className='navitem'>Commercial & Music Video</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="second">Payroll Services</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="third">Documentary</Nav.Link></Nav.Item>
          </Nav>
        </Col>

        <Col sm={12}>
          <Tab.Content>


            <Tab.Pane eventKey="first">
            <Row className='bg-white px-0 mx-0'>
             {
                 logos.map((logo,i)=>(
                     <Col md="3" key={i}>
                         <Image src={logo} className='one'/>
                     </Col>
                 ))
             }
            </Row> 
            </Tab.Pane>


            <Tab.Pane eventKey="second">

            <Row className='bg-white px-0 mx-0'>
             {
                 logos.map((logo,i)=>(
                     <Col md="3" key={i}>
                         <Image src={logo} className='one'/>
                     </Col>
                 ))
             }
            </Row> 

            </Tab.Pane>

            <Tab.Pane eventKey="third">

            <Row className='bg-white px-0 mx-0'>
             {
                 logos.map((logo,i)=>(
                     <Col md="3" key={i}>
                         <Image src={logo} className='one'/>
                     </Col>
                 ))
             }
            </Row> 

            </Tab.Pane>


          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Container>
    </section>

    )
}