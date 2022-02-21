import {Card} from 'react-bootstrap';
import {Rating} from "@mui/material";
import ShowMoreText from 'react-show-more-text';

const CardFilms =({film})=>{
    return(
        <div>
                
       <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={film.posterUrl} />
           <Card.Body>
           <Card.Title>{film.title}</Card.Title>
           <Card.Text>
             <ShowMoreText lines={3} more="Show more" less="Show less" className="showMore">
             {film.description} 
             </ShowMoreText>
               
             
        </Card.Text>
       
      <Rating value={film.rating} readOnly />
      </Card.Body>    
      </Card>
        </div>
    )
}
export default CardFilms;