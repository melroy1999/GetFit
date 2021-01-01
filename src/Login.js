import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'

function Login()	{
	return (
	<div className='out'>
    <div className='Registercontent'>
    <div className='header'>
    <h1> Login </h1>
    </div>
    <div className='content'>
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className='text-center'>UserName:</Form.Label>
    <Form.Control type="Username" placeholder="Username" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter Password:</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  </Form>
</div>
  <div className='footer'> 
  <Button variant="secondary" block={true} size="lg" type='submit'>
    Register
  </Button>
  </div>
  </div>
  </div>
  )
}
export default Login