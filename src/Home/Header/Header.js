import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';



const Header = () => {

  const { user, logout } = useAuth();
  
    return (
        <div id='home'>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
  <Container>
  <Navbar.Brand as={HashLink} to="/home"><span className="green">Edge-Tech</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                
            
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/courses">Courses</Nav.Link>
      <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
      <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
    
                
 
    </Nav>
    <Nav>
      
                
                         
                            
                            <Nav>
              
             
                  <Nav.Link >
                        {user?.email  &&
                          <button style={{color: 'white', background: 'rgb(37, 69, 177)',  borderStyle: 'none' , marginLeft: '15px', borderRadius: '2px'}}  className='mx-3'> { user?.displayName || user?.email}</button>  
                        }
                        
                        {user?.email ?
                        
                        <button onClick={logout}  style={{color: 'white', background: 'rgb(37, 69, 177)',  borderStyle: 'none' , marginLeft: '15px', borderRadius: '2px'}}>Logout</button>
                        :
                        <NavLink to="/login"><button style={{color: 'white', background: 'rgb(37, 69, 177)', borderStyle: 'none', marginLeft: '15px', borderRadius: '2px'}} className="login">Login</button></NavLink> }
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