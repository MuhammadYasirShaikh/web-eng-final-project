import ali from '../assets/images/ali.png'
import sadia from '../assets/images/sadia.png'
import hafsa from '../assets/images/hafsa.png'


import cat1 from '../assets/images/a1.png'
import cat2 from '../assets/images/a2.png'
import cat3 from '../assets/images/a3.png'
import cat4 from '../assets/images/a4.png'

import head from '../assets/images/head.png'
import abimage from '../assets/images/abimage.png'
import Features from './Features'
export default function About(){
    return(
        <>
        <div className="container my-5">
            <img src={head} alt="" />
        </div>
        <div  className="mx-2 row container-fluid my-3">
        <div className=" col-lg-6 col-md-6 col-sm-12 ">
        <h1 className=' my-4 fw-bold'> About us</h1>
        <p>Welcome to Farhang, a vibrant tapestry where tradition meets innovation. Farhang is not just a platform; it's a cultural bridge connecting artisans and art enthusiasts globally.
        Our Mission: At Farhang, we are on a mission to empower local artisans and showcase the rich tapestry of cultural heritage. We believe in the magic of handcrafted creations and the stories they carry. Our platform is a celebration of diversity, fostering connections that transcend borders.
        <br /><br /> What We Stand For: <br />
        1. Empowering Artisans: Farhang is a haven for local artisans, providing them with a global stage to showcase their talent and sustain their livelihoods. <br />
        2. Cultural Appreciation: We believe in the power of cultural exchange. Farhang is your gateway to authentic, handmade treasures that carry the soul of diverse traditions.</p></div>
        <div className="col-lg-6 col-md-6 col-sm-12">
            <img className='my-4 mx-1 abt img-fluid' src={abimage} alt="" />
        </div>

        </div>
        <br />
        <div className='mx-5 my-5 row container justify-content-center text-center'>
<div style={{width:'230px',height:'190px'}} className="mx-4 col-lg-3 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{width:'50px',marginTop:'20px'}} src={cat1} alt="" /> <br /> <p style={{fontSize:'25px',marginTop:'10px'}} className='fw-bold'>10.5k</p> 
Sallers active our site</div>
<div style={{width:'230px',height:'190px'}} className="gradient mx-4 col-lg-3 col-md-4 col-sm-12 bor justify-content-center text-center text-light"><img style={{width:'50px',marginTop:'20px'}} src={cat2} alt="" /> <br /> <p style={{fontSize:'25px',marginTop:'10px'}} className='text-light fw-bold'>33k</p> 
Sallers active our site</div>
<div style={{width:'230px',height:'190px'}} className="mx-4 col-lg-3 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{width:'50px',marginTop:'20px'}} src={cat3} alt="" /> <br /> <p style={{fontSize:'25px',marginTop:'10px'}} className='fw-bold'>45.5k</p> 
Sallers active our site</div>
<div style={{width:'230px',height:'190px'}} className="mx-4 col-lg-3 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{width:'50px',marginTop:'20px'}} src={cat4} alt="" /> <br /> <p style={{fontSize:'25px',marginTop:'10px'}} className='fw-bold'>25k</p> 
Sallers active our site</div>
<div className='my-3'>
<br />
  <hr />
</div>
    
    </div>
    
        <Features/>

    </>
    )
}