import { Rating } from "@mui/material";
import { Button } from "react-bootstrap";


const FilterFilms=({inpt,setInpt,rate,setRate})=>{
    const handleReset=()=>{
        setInpt('')
        setRate(0)
    }
    return(
        <div className="filterfilm">
           <input onChange={(e)=> setInpt(e.target.value)} value={inpt}/>
           <Rating onChange={(e)=> setRate(e.target.value)} value={rate}/>
           <Button  variant="outline-info" onClick={handleReset}>Reset</Button>


            </div>
    )
}
export default FilterFilms;