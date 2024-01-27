import arrival from '../assets/images/arrival.png'
import box from '../assets/images/box.png'
export default function Newarrival(){
    return(
        <>
<div  className='mx-2 my-2 container-fluid'>
      <img className='mx-5 my-2' src={box} alt="" />
    <p className='mx-5 my-3 fw-bold' style={{fontSize:'36px'}}>New Arrivals  </p>
    </div><div className="container-fluid justify-content-center text-center">
    <img  className='img-fluid' src={arrival} alt="" />
    </div>
    </>

    )
}