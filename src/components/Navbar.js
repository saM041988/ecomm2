import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link} from 'react-router-dom';
import CartButtons from '../components/CartButtons'
import { useUserContext } from '../context/user_context'

function CollapsibleExample() {

  const { myUser } = useUserContext()
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/'>Ecommerce</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Product</Link>
            {
              myUser && <Link to='/checkOut'>CheckOut</Link> 
            }
            
          </Nav>
          <Nav>
            <CartButtons />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;