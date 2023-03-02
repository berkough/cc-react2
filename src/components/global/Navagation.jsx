import { Container, Nav , Navbar} from 'react-bootstrap';

export default function Navagation(){
    return(
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>CornerComics</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-nav-bar' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='/'>Main</Nav.Link>
                        <Nav.Link href='/search'>Search</Nav.Link>
                        <Nav.Link href='/collection'>Collection</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}