import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';


export default function AppTestimonials () {
    return (
        
    <section className="testimonials">
      <Container>
          
      <Carousel variant="dark">
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption className='test-content'>
          <h1 className='heading7'>Joseph</h1>
          <p className='longtext7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h1 className='heading7'>Sandra</h1>
          <p className='longtext7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h1 className='heading7'>Charles</h1>
          <p className='longtext7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



      </Container>
    </section>

    )
}