import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/AuthServices";
import ROLE from "../../constant/ROLE";

import {Container, Form, Col, Row, Button} from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(ROLE.NGUOI_CHO_THUE)

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
        authService.login(email, password);
        navigate("/home");
        window.location.reload();

    } catch (err) {
      console.log(err);
    }
  };

  const onChangeRole = (e) => {
    setRole(e.target.value);
  }

  const myStyle = {
    border: '1px solid gray',
    borderRadius: '2%',
    padding: '10px' 
  }


  return (
    <Container style={myStyle}>
      <Form onSubmit={handleLogin}>
        <Row className="mb-2">
           <h2 className="text-center">Login</h2>
        </Row>
        
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Col md="3" />
          <Form.Label column lg="2">
            Email
          </Form.Label>
          <Col sm="5">
            <Form.Control type="email" placeholder="Email" value={email} onChange={(event) => {
              const {email} = event.target;
              setEmail(email)
            }}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPassword">
          <Col md="3" />
          <Form.Label column lg="2">
            Password
          </Form.Label>
          <Col sm="5">
            <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => {
               const {password} = event.target;
               setPassword(password)
            }}/>
          </Col>
        </Form.Group>

        
        <Row>
          <Col md="5" />
          <Col md="2">
            <Button type="submit">Login</Button>
          </Col>
            
        </Row>
        

      </Form>
    </Container>
  );
};

export default Login;