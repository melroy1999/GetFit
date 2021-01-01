import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Register from './Register'
import Login from './Login'
import {Route,Switch,Link} from 'react-router-dom'

import './style.css'

function Main () {
	return (
		<div className='outmain'>
			<div>
	<Navbar bg="dark">
   	 <Navbar.Brand href="#home">
      <img
        src="/logo.jpg"
        width="50"
        height="40"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
      <Nav.Link>Calorie Calculator</Nav.Link>
      <Nav.Link>Workout Plans</Nav.Link>
      <Nav.Link>Recipes</Nav.Link>
      <Nav.Link><Link to='/Register'>Register</Link></Nav.Link>
      <Nav.Link><Link to='/Login'>Login</Link></Nav.Link>
       </Nav>

     </Navbar>
     <Switch>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
     </Switch>
  	</div>
  </div>
	)
}
export default Main