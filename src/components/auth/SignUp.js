import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/AuthServices";
import {Container, Form, Col, Row, Button} from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const myStyle = {
    border: '1px solid gray',
    borderRadius: '2%',
    padding: '10px' 
  }

  return (
    <Container style={myStyle}>
      <Form>
        <Row className="mb-2">
           <h2 className="text-center">Sign up</h2>
        </Row>
        
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Col md="3" />
          <Form.Label column lg="2">
            Email
          </Form.Label>
          <Col sm="5">
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPassword">
          <Col md="3" />
          <Form.Label column lg="2">
            Password
          </Form.Label>
          <Col sm="5">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formUserRole">
          <Col md="3" />

          <Col key='inline-radio'>
            <Form.Label column md="3">
              Role
            </Form.Label> 
            <Form.Check
                inline 
                type='radio'
                label='Người đi thuê'
                name='userRole'
                id="userRole"
              />

              <Form.Check
                inline
                type='radio'
                label='Người thuê'
                name='userRole'
                id="userRole"
              />
          </Col>
        </Form.Group>
        <Row>
          <Col md="5" />
          <Col md="2">
            <Button type="submit">Sign up</Button>
          </Col>
            
        </Row>
        

      </Form>
    </Container>
  )
};

export default Login;