import { Image } from "react-bootstrap"
import testimonial1 from '../../assets/images/testimonial1.png';
// import testimonial2 from '../assets/images/testimonial2.png';
// import testimonial3 from '../assets/images/testimonial3.png';

export default function ExampleCarouselImage () {
    return (
        <Image src={testimonial1} className='testimonialimage'/>
        // <Image src={testimonial2} className='testimonialimage'/>
        // <Image src={testimonial3} className='testimonialimage'/>
    )
}