import {Form,Button} from 'react-bootstrap'
const Contact=()=>{
    return(
        <div>
            <h1 style={{color: 'grey', fontFamily:'serif', fontSize:'20px', marginTop:'40px'}}>For more information don't hesitate to contact us</h1>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Label>Message</Form.Label>
    <Form.Control type="text" placeholder="write your message here" />
  </Form.Group>
  
    
  <Button variant="dark" type="submit">
    send message
  </Button>
</Form>
        </div>
    )
}

export default Contact