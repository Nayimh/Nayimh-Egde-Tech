import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
  <Container>
  <Navbar.Brand href="/home"><span className="green">Edge-Tech</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                
            
      <Nav.Link  to="/home">Home</Nav.Link>
      <Nav.Link  to="/courses">Courses</Nav.Link>
      <Nav.Link  to="/contact">Contact</Nav.Link>
      <Nav.Link  to="/about">About</Nav.Link>
    
                
 
    </Nav>
    <Nav>
      
                
                         
                            
                            <Nav>
              
              <Nav.Link >
                       
                        
                        <button   style={{color: 'white', background: '#207FA6',  borderStyle: 'none' , marginLeft: '15px', borderRadius: '2px'}}>Logout</button>
                       
                        <NavLink to="/login"><button style={{color: 'white', background: '#207FA6', borderStyle: 'none', marginLeft: '15px', borderRadius: '2px'}} className="login">Login</button></NavLink> 
              </Nav.Link>
            </Nav>
                        
                        </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;