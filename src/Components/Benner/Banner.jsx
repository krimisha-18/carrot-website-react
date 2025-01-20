import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-center">

                            <div className="col-12 col-md-6 col-lg-4 p-2">
                                <div class="banner card">
                                    <img src="imgs/benner-1.jpg" class="card-img-top" alt="..." />
                                    <div class="col-8 banner-body card-body  ">
                                        <h5>Healthy<br></br> Bakery Products</h5>
                                        <p><span className='fs-4 sp pe-1'>30%</span> off <span>on first order</span> </p>
                                        <div className="ShopBtn d-flex"> <a href="#" class="btn fs-6">shop Now</a></div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 p-2">
                                <div class="banner card">
                                    <img src="imgs/benner-2.jpg" class="card-img-top" alt="..." />
                                    <div class="col-8 banner-body card-body  ">
                                        <h5>Fresh<br></br> Snacks & Sweets</h5>
                                        <p><span className='fs-4 sp pe-1'>20%</span> off <span>on first order</span> </p>
                                        <div className="ShopBtn d-flex"> <a href="#" class="btn fs-6">shop Now</a></div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 p-2">
                                <div class="banner card">
                                    <img src="imgs/benner-3.jpg" class="card-img-top" alt="..." />
                                    <div class="col-8 banner-body card-body  ">
                                        <h5>Fresh & healthy  Organic Fruits</h5>
                                        <p><span className='fs-4 sp pe-1'>35%</span> off <span>on first order</span> </p>
                                        <div className="ShopBtn d-flex"> <a href="#" class="btn fs-6">shop Now</a></div>
                                        </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
