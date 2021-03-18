import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Facebook from './Facebook';



export default function LoginForm({Login}) {
 const [details,setDetail]=useState({email:"",password:""})

  function handleSubmit(event) {
    event.preventDefault();
    Login(details);
  }
 

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={details.email}
            onChange={(e) => setDetail({...details, email:e.target.value})}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={details.password}
            onChange={(e) => setDetail({...details, password:e.target.value})}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
      <div style={{ marginTop:'1%' }} ><Facebook/></div>
    </div>
  );
}