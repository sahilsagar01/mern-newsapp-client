
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Singup() {
    const [existingUser, setExistingUser] = useState({
        email: "",
        password: ""
    })
const handleChange = (e) => {
    const {name, value} = e.target;
    setExistingUser(pV => {
        return {
            ...pV,
            [name]: value
        }
    })
}
const handleClick = async (e) => {
    e.preventDefault();
    try{
        const url = "http://localhost:5002/find"
        const foundUser = await axios.post(url, existingUser);
        console.log(foundUser)
    }
    catch(err){

    }
}


  const [validated, setValidated] = useState(false);



  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='singupCont'>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ">
        <Form className='inputSingup' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
      <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              name='email'
              required
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name='password'
            placeholder="password"
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Button onClick={handleClick} type="submit">Login</Button>
      <Button href='/singup'>Signup</Button>
    </Form>
    </div>
    </div>
  );
}

export default Singup;