import ListOfFilms from './ListOfFilms';
import AddFilms from './AddFilms';
import { Container } from 'react-bootstrap';
import FilterFilms from './FilterFilms';
const Menu=({inpt,setInpt,rate,setRate,handleAdd,films})=>{
    return(
        <div>
            
            <Container>
               <FilterFilms inpt={inpt} setInpt={setInpt} rate={rate} setRate={setRate}/>
               <AddFilms handleAdd={handleAdd}/>
               <ListOfFilms films={films} inpt={inpt} rate={rate}/>
            </Container>
        </div>
    )
}

export default Menu