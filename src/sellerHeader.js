import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const sellerHeader = () => {

  return (
        <>
      <Navbar className='heade' bg="light" variant="light">
        <Container className="header" >
        <h1> <a href="/sellerhome" class="text-decoration-none"><span className="hawkerspot">HawkerSpot.</span></a></h1>
        <h4><a href="/" class=" logout text-decoration-none" >Logout</a></h4>
        </Container>
      </Navbar>
    </>
  )
}

export default sellerHeader
