import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import hero from '../../assets/images/hero.jpg';


export default function AppBanner() {
    return(
       
        <section className='banner'>
            
        <div>

        <div class="bottom-left">
        <h1 className='heading'>Integrated payroll and accounting for streamlined production processes</h1>
        <p className='longtext'>Your all-in-one solution for production accounting and payroll is here. With streamlined onboarding, shortened processing times, and industry-leading service, it's the only app you'll ever need.</p>
        <div className='button'><Button variant="primary">Explore more    <i class="fa-solid fa-angle-right"></i></Button></div>

        </div>

        </div>
        
        </section>
    )
}