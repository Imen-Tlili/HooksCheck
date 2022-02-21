import { Container,Navbar, Nav} from "react-bootstrap";

const NavFilms=()=>{

    return(
        <div>
         <Navbar bg="primary" variant="dark">
           <Container>
            <Navbar.Brand href="#home">Movies</Navbar.Brand>
            <Nav className="me-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
                 <Nav.Link href="#menu">Menu</Nav.Link>
                 <Nav.Link href="#favoris">Liste de favoris</Nav.Link>
            </Nav>
           </Container>
          </Navbar>
        </div>
    )
}
export default NavFilms;