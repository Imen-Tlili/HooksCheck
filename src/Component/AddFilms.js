import {useState} from 'react';
import {Button,Form,Modal} from "react-bootstrap";
import {Rating} from "@mui/material";

const AddFilms=({handleAdd})=>{
    const [show, setShow]=useState(false);
    const handleClose=()=> setShow(false);
    const handleShow=()=> setShow(true);
    const [titleA,setTitleA] = useState('')
    const [descriptionA,setDescriptionA] = useState('')
    const [posterA,setPosterA] = useState('')
    const [ratingA,setRatingA] = useState(0)
     return(
         <div className='model'>
             <Button className="add" variant="primary" onClick={handleShow}>Add</Button>
                 <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                       <Modal.Title>Add a new film</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <Form>
                         
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                           <Form.Label>Title</Form.Label>
                           <Form.Control type="Text" placeholder="Enter Title" onChange={(e)=>setTitleA(e.target.value)}/>
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="formBasicDesription">
                           <Form.Label>description</Form.Label>
                           <Form.Control type="Text" placeholder="Enter description" onChange={(e)=>setDescriptionA(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                           <Form.Label>Poster</Form.Label>
                           <Form.Control type="img" placeholder="Enter Poster" onChange={(e)=>setPosterA(e.target.value)}/>
                        </Form.Group>
                     
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                           <Form.Label>Rating</Form.Label>
                           <br/>
                           <Rating onChange={(e)=>setRatingA(e.target.value)}/>
                        </Form.Group>
                     </Form>

                    </Modal.Body>

                   <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={()=>{handleAdd({title: titleA, description : descriptionA, posterUrl : posterA, rating : ratingA, id : Math.random()});handleClose()}}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
         </div>
     )

}
export default AddFilms;