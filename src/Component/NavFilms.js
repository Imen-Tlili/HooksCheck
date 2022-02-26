import { Container,Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavFilms=()=>{

    return(
        <div>
         <Navbar bg="dark" variant="dark">
           <Container>
            
            <Nav>
                 <Nav.Link style={{color:'white'}}><Link to ='/'>Home</Link></Nav.Link>
                 <Nav.Link className='lin'><Link to ='/menu'>Menu</Link></Nav.Link>
                 <Nav.Link className='lin'><Link to ='/contact'>Contact</Link></Nav.Link>
            </Nav>
           </Container>
          </Navbar>
        </div>
    )
}
export default NavFilms;