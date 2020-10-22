import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Form>
        <Form.Group>
          <div className='social-google'>
            <Button size='block' variant='outline-danger'>
              <FcGoogle /> Sign in with Google+
            </Button>
          </div>
          <p style={{ textAlign: "center" }}> OR </p>
          <hr></hr>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email </Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit' size='block'>
          Sign in
        </Button>
      </Form>
    </>
  );
};

export default Login;
