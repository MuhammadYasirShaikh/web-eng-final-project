import { Link } from 'react-router-dom'
import star from '../assets/images/stars.png'
import today from '../assets/images/Frame 625.png' 
import Card from 'react-bootstrap/Card';
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import card4 from '../assets/images/card4.png'
import arrows from '../assets/images/arrows.png'

const Flash = () => {
    return(
    <div>
    <div style={{}} className='mx-5 my-2 container-fluid'>
          <img  className='mx-2 my-2' src={today} alt="" />
        <br /><br />
        <div className="container-fluid row">
              <div className="col-lg-10 col-md-6 col-sm-6">
              <h2 className=' my-4 fw-bold'>Flash Sales </h2>
              </div>
              <div className="my-3 col-lg-2 col-md-6 col-sm-12">
              <img  style={{textAlign:'right'}} src={arrows}/>
              </div>
            </div></div>
        <div  className='mx-2 my-4 container-fluid row '>
        <div  className=' col-lg-3 col-md-6 col-sm-12'>
        <Link style={{color:'black',textDecoration:'none'}} to={'/data'}> <Card  style={{  border: 'none' }}>
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Title>Balochi Doch</Card.Title>
            $120   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $160</span>  
            <Card.Text>
          <img src={star} alt="" />
            <br /><br />
            </Card.Text>
          </Card.Body>
        </Card></Link>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'><Link style={{color:'black',textDecoration:'none'}} to={'/data'}><Card  style={{  border: 'none' }}>
          <Card.Img variant="top" src={card2} />
          <Card.Body>
            <Card.Title>Embroidered Dress</Card.Title>
            $120   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $160</span>  
            <Card.Text>
          <img src={star} alt="" />
            <br /><br />
            </Card.Text>
          </Card.Body>
        </Card></Link></div>
        <div className='col-lg-3 col-md-6 col-sm-12'><Link style={{color:'black',textDecoration:'none'}} to={'/data'}><Card  style={{  border: 'none' }}>
          <Card.Img variant="top" src={card3} />
          <Card.Body>
            <Card.Title>Embroidered Dress</Card.Title>
            $960   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $1160</span>  
            <Card.Text>
          <img src={star} alt="" />
            <br /><br />
            </Card.Text>
          </Card.Body>
        </Card></Link></div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
        <Link style={{color:'black',textDecoration:'none'}} to={'/data'}>
          <Card  style={{  border: 'none' }}>
          <Card.Img variant="top" src={card4} />
          <Card.Body>
            <Card.Title>Blue Applique Dress </Card.Title>
            $120   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $160</span>  
            <Card.Text>
          <img src={star} alt="" />
            <br /><br />
            </Card.Text>
          </Card.Body>
        </Card></Link></div>
        <div className='my-3 justify-content-center text-center'><Link style={{color:'white',textDecoration:'none'}} to={'/prod'}>
        <button style={{width :'270px',fontSize:'18px'}} className=' gradient-container btn text-light'>View All products </button></Link>
       <br /><br />
       </div>
       <hr />
        </div>
    
    </div>
    
    )
    }
    export {Flash};
    