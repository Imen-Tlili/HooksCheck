import { useNavigate, useParams } from "react-router-dom"
import {Rating} from "@mui/material";


const CardDesc=({films})=>{
    
    const {id} = useParams()
    const navigate = useNavigate()
    const foundedCard= films.find(film => film.id == id)
    return(
        <div>
          
           <img  style={{marginLeft:'800px', width:'400px',height:'500px', marginTop:'50px'}}src={foundedCard.posterUrl} alt='poster' />
          
           <h1 style={{fontFamily:'serif', fontSize: '40px',marginTop:'-500px',marginLeft:'300px'}}>{foundedCard.title}</h1>
           <h2 style={{fontFamily:'serif', fontSize: '20px', marginTop:'40px', width:'700px',color:'black'}}>{foundedCard.description}</h2> 
           <iframe  style={{marginLeft:'100px'}} width="560" height="315" src={foundedCard.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
            <br/>
           <Rating style={{marginLeft:'100px'}} value={foundedCard.rating} readOnly />
      
    
       
     
           
          <button style={{ backgroundColor:'red', color:'white', border:'none',padding: '8px 55px',borderRadius: '4px', marginLeft:'900px'}} onClick={()=>navigate('/')}>Return</button>
        </div>
    )
}

export default CardDesc