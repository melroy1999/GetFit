import React,{useState} from 'react'
import './style.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'

function Register()	{

  const [user, setuser] = useState({
    username:'',
    email:'',
    password:'',
    cpassword:''
  });

  const {username,email,password,cpassword}=user;
  
  const onChange = e => setuser({
      ...user,[e.target.name]:e.target.value
  })

  const onSubmit = e => {
    e.preventDefault();
    console.log("User Registered")
  }

	return (
	<div className='out'>
		<div className='Registercontent'>
		<div className='header'>
		<h1> Register </h1>
		</div>
		<div className='content'>
	<Form onSubmit = {onSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className='text-center'>UserName:</Form.Label>
    <Form.Control type="Username" placeholder="Username" onChange={onChange} value={username}/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label className='text-center'>Email:</Form.Label>
    <Form.Control type="Email" placeholder="Email" onChange={this.onChange} value={email} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter Password:</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={this.onChange} value={password}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Re-Enter Password:</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={this.onChange} value={cpassword}/>
  </Form.Group>
</Form>
</div>
	<div className='footer'> 
  <Button variant="secondary" block={true} size="lg" type='submit' value='registernow'>
    Register
  </Button>
  </div>
  </div>
	</div>
	);
}
export default Register