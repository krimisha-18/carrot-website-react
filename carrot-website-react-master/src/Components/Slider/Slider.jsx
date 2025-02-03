import React from 'react'
import './Slider.css'

const Slider = () => {
  return (
    <div className='slider'>
      <div className="container-fluid p-0">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item slider1 active" data-bs-interval="2000" >

              <div className="carousel-caption col-7 col-md-4 text-start ">
                <h5 className='fs-6 '><span>100%</span> Organic Vegetable</h5>
                <h1 className='fs-1 py-2'>The best way to <br /> stuff your wallet.</h1>
                <p className='fs-6 flex '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                <button className='btn '>Shop Now</button>
              </div>



            </div>
            <div class="carousel-item slider2" data-bs-interval="2000">
                <div className="carousel-caption col-7 col-md-4 text-start ">
                  <h5 className='fs-6'><span>100%</span>Organic Fruits</h5>
                  <h1 className='fs-2 py-2'>Explore fresh &<br /> juicy fruits.</h1>
                  <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                  <button className='btn '>Shop Now</button>
                </div>
              
            </div>


          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Slider

