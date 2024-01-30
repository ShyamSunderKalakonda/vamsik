import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-calculator',
    title: 'Production Accounting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur.'
  },
  {
    id: 2,
    icon: 'fas fa-money-bill-transfer',
    title: 'Payroll',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur.'
  },
  {
    id: 3,
    icon: 'fas fa-coins',
    title: 'Budget',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur.'
  },
  {
    id: 4,
    icon: 'fas fa-calendar-days',
    title: 'Calendar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur'
  },
  {
    id: 5,
    icon: 'fas fa-chart-line',
    title: 'Analytics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur.'
  },
  {
    id: 6,
    icon: 'fas fa-book',
    title: 'Script Writing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur.'
  }
]

function AppServices() {
  return (
    <section className="services">
      <Container fluid>
        <div className="title-holder">
          <h2>What we serve</h2>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p className='para'>{services.description}</p>
                  <div><Button variant="primary" className='btn'>Explore more    <i class="fa-solid fa-angle-right"></i></Button></div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;