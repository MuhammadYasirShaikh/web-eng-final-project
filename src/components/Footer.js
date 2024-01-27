import React from 'react';
import fr from '../assets/images/Frame 643.png'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo-white 1.png'
import em from '../assets/images/Send Mail.png'
import p from '../assets/images/Frame 741.png'
const Footer = () => {
  return (
    <div style={{width:'110%'}} className="container-fluid foot-container text-light">
      <Container>
        <Row>
          <Col>
          <img style={{marginTop:'50px',marginBottom:''}} className=' l' src={logo} alt="" />
            <h4 className='mx-4 my-3' style={{fontSize:'20px'}}>Subscribe</h4>
            <p className='mx-4 my-2' style={{fontSize:'16px'}}>Get 10% of on your first voucher</p>
            <img style={{width:'80%'}} className='mx-4 l my-2' src={em} alt="" />
         
          </Col>
          <Col>
          <h4 className='mx-4 ' style={{fontSize:'20px',marginTop:'60px'}}>Support</h4>
          <p className='mx-4 my-3' style={{fontSize:'16px'}}>Sukkur IBA, Sukkur,<br />  Pakistan.</p>
          <p className='mx-4 my-3' style={{fontSize:'16px'}}>farhng.company@gmail.com</p>
          <p className='mx-4 my-3' style={{fontSize:'16px'}}>+92-3458311328</p>
           
          </Col>
          <Col>
          <h4 className='mx-4 ' style={{fontSize:'20px',marginTop:'60px'}}>Quick Link</h4>
          <p className='mx-4 my-3' style={{fontSize:'16px'}}>Privacy policy</p>
          <p className='mx-4 my-2' style={{fontSize:'16px'}}>Terms of use</p>
          <p className='mx-4 my-2' style={{fontSize:'16px'}}>Faq</p>
          <p className='mx-4 my-2' style={{fontSize:'16px'}}>Contact</p>
          
          </Col>
          <Col>
          <img  style={{marginTop:'120px',marginBottom:''}} className=' ' src={p} alt="" />

          </Col>
        </Row>
      </Container>
      <br /><br />
      <div>
        <img className='my-3' src={fr} alt="" />
      </div>
    </div>
  );
};

export default Footer;
