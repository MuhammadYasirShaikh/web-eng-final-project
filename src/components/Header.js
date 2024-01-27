
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from '../assets/images/logo-black 1.png';
import logo1 from '../assets/images/Frame 551.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [keyword, setKeyword] = useState('');

  const changeKey = (e) => {
    setKeyword(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      // Handle search action here
      console.log('Perform search:', keyword);
    }
  };

  return (
    <>
    
      <div style={{width:'100%'}} className='col-sm-12 col-lg-12 col-md-12 container-fluid gradient-container topdiv'></div>
                
      <Navbar expand="lg" className="">
      <Image className='mx-4'  src={logo} alt="" />
   
        <Container>
          
          <div className="">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
           
              <div className='mx-2  justify-content-center text-center'>
                <Nav className="head me-auto mx-5">
                  <Nav.Link className='mx-3 my-1 fw-bold'><Link style={{color:'black',textDecoration:'none'}} to={'/'}>Home </Link></Nav.Link>
                  <Nav.Link className='mx-3 my-1 fw-bold'><Link style={{color:'black',textDecoration:'none'}} to={'/con'}>Contact </Link></Nav.Link>
                  <Nav.Link className='mx-3 my-1 fw-bold pad'><Link style={{color:'black',textDecoration:'none'}} to={'/abt'}>About </Link> </Nav.Link>
                  <div style={{background:'#F5F5F5',height:'36px',width:'200px'}}  className=' mx-5 my-2 search'>
                    <input
                      id="quick_search"
                      className=" xs-hide "
                      name="quick_search"
                      placeholder="What are you looking for"
                      type="text"
                      onChange={(e) => {
                        changeKey(e);
                      }}
                      onKeyDown={keyPress}
                      value={keyword}
                      style={{ border:'none',background:'#F5F5F5',textDecoration:'none',fontSize:'12px'}}
                    />
                    <FontAwesomeIcon  style={{width:'30px',height:'20px',marginTop:'5px' }}  icon={faSearch} aria-hidden="true" />
                  </div>
                  <Image className='mar mx-5 left my-2' src={logo1} alt="" />
              <div style={{ border: '2px solid white', borderRadius: '50%', padding: '5px' }}>
     
    </div>
                </Nav>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <hr className='h' />
    </>
  );
};

export default Header;
