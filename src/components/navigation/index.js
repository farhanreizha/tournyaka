import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap'
import { HeaderLogo } from '../../assets'

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={HeaderLogo} alt='HeaderLogo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0'>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#events'>Events</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
          <Form className='d-lg-flex gap-lg-2 d-grid gap-2'>
            <Button variant='outline-warning'>Login</Button>
            <Button variant='warning'>Register</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
