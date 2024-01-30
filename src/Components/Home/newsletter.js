import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function AppNewsletter () {
    return (
        <section className='newsletter'>

        <Container>

        <Row>
        <Col sm={6}>
           <h1 className='heading4'>News Letter</h1>
           <p className='longtext4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text.</p>
        </Col>

         <Col sm={6}>

          <InputGroup className="mb-3">
          <Form.Control
          placeholder="Search here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className='news'
        />
        <Button variant="outline-secondary" className='news'>
          Button
        </Button>
      </InputGroup>
      
        </Col>


        
      </Row>

        </Container>

        </section>
    )
}