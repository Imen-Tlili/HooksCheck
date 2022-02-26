import {Card} from 'react-bootstrap';
import {Rating} from "@mui/material";
import ShowMoreText from 'react-show-more-text';
import { Link } from "react-router-dom"

const CardFilms =({film})=>{
    return(
        <div>
          
       <Card style={{ width: '18rem', background:'black'}}>
           <Card.Img variant="top" src={film.posterUrl} />
           <Card.Body>
           <Card.Title style={{color:'red', textAlign:'center'}}>{film.title}</Card.Title>
           <Card.Text style={{color:'white'}}> 
             <ShowMoreText lines={3} more="Show more" less="Show less" className="showMore">
             {film.description} 
             </ShowMoreText>
               
             
        </Card.Text>
       
      <Rating value={film.rating} readOnly />
      </Card.Body> 
      <Link to={`/menu/${film.id}`}><button style={{ backgroundColor:'tomato', color:'white', border:'none',padding: '8px 15px',borderRadius: '4px', marginLeft:'80px'}}>Watch Trailer</button></Link>
      
       
      </Card>
        </div>
    )
}
export default CardFilms;