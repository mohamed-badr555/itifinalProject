import React from 'react'
import p1 from '/public/assets/p1.jpg'
import p2 from '/public/assets/P2.jpg'
import p3 from '/public/assets/p3.jpg'
import p4 from '/public/assets/p4.jpg'
export default function Home() {
  return (
    <div className='' >
      
      <div id="carouselExampleIndicators"className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src={p1}className="d-block object-fit-cover vh-100 w-100" alt="..."/>
    </div>
    <div className="carousel-item" >
      <img src={p2}className="d-block object-fit-cover vh-100 w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={p3}className="d-block object-fit-cover vh-100 w-100" alt="..."/>
    </div>
  </div>

</div>
  
 <div className="about my-5">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
    <div className="img">
      <img src={p4} className='w-100' alt="" />
    </div>
      </div>
      <div className="col-md-6">
    <div className="text">
      <h2>About </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi architecto saepe velit omnis quam itaque sunt! Eius, veritatis libero iste quam eos aliquam suscipit quidem nihil eum cum accusamus.</p>
    </div>
      </div>
    </div>
  </div>
 </div>


    </div>
  )
}
