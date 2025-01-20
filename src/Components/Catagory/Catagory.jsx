import React from 'react'
import './Catagory.css'

const Catagory = () => {
    return (
        <div>
            <div className="section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div class="catagory d-flex flex-wrap align-items-center align-items-lg-start ">
                                <div className="col-12 col-lg-4">
                                    <div class="nav flex-column nav-pills me-3 w-50 pt-2 w-100 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <div className="col-12 d-flex flex-wrap">
                                            <div className="col-12  col-sm-6 col-lg-12 mb-2">
                                                <button class="nav-link active p-2 w-100" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><h5>cake & Milk</h5>
                                                    <span>(65 items)</span> </button>
                                            </div>
                                            <div className="col-12  col-sm-6 col-lg-12 mb-2">
                                                <button class="nav-link p-2 w-100" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><h5>Meat</h5>
                                                    <span>(30 items)</span> </button>
                                            </div>
                                            <div className="col-12  col-sm-6 col-lg-12 mb-2">
                                                <button class="nav-link p-2 w-100" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false"><h5>Vegetable</h5>
                                                    <span>(25 items)</span> </button>
                                            </div>
                                            <div className="col-12  col-sm-6 col-lg-12 mb-2">
                                                <button class="nav-link p-2 w-100" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><h5>Apple & Mango</h5>
                                                    <span>(45 items)</span> </button>
                                            </div>
                                            <div className="col-12  col-sm-6 col-lg-12 mb-2">
                                                <button class="nav-link p-2 w-100" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><h5>Stawberry</h5>
                                                    <span>(68 items)</span> </button>
                                            </div>
                                            <div className="col-12  col-sm-6 col-lg-12 mb-2 ">
                                                <button class="nav-link p-4 w-100" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false"><h5>View More</h5>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <div class="tab-content" id="v-pills-tabContent">
                                        <div class="tab-pane fade show active w-100" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                                                <div className="col-12 col-sm-6 p-2">
                                                    <div class="cat-card card position-relative hidden">
                                                        <img src="imgs/cat-stobary.jpg" class="card-img-top" alt="..." />
                                                        <div className="offer">
                                                            <h3>50
                                                                <span className='fs-5 d-flex flex-column pt-3'>
                                                                    <small>%</small>
                                                                    <small>OFF</small>
                                                                </span>
                                                            </h3>
                                                        </div>
                                                        <div class="cat-body card-body position-absolute bottom-0 start-10 text-white">
                                                            <h4 class="card-title d-flex justify-content-center">Cake</h4>
                                                            <div className="ShopBtn d-flex justify-content-center"> <a href="#" class="btn ">shop Now</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 p-2">
                                                    <div class="cat-card card position-relative hidden">
                                                        <img src="imgs/cat-milk.jpg" class="card-img-top" alt="..." />
                                                        <div className="offer">
                                                            <h3>40
                                                                <span className='fs-5 d-flex flex-column pt-3'>
                                                                    <small>%</small>
                                                                    <small>OFF</small>
                                                                </span>
                                                            </h3>
                                                        </div>
                                                        <div class="cat-body card-body position-absolute bottom-0 start-10 text-white">
                                                            <h4 class="card-title d-flex justify-content-center">Milk</h4>
                                                            <div className="ShopBtn d-flex justify-content-center"> <a href="#" class="btn ">shop Now</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">  <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                                            <div className="col-12 col-sm-6 p-2">
                                                <div class="cat-card card position-relative hidden">
                                                    <img src="imgs/meat-1.jpg" class="card-img-top" alt="..." />
                                                    <div className="offer">
                                                        <h3>50
                                                            <span className='fs-5 d-flex flex-column pt-3'>
                                                                <small>%</small>
                                                                <small>OFF</small>
                                                            </span>
                                                        </h3>
                                                    </div>
                                                    <div class="cat-body card-body position-absolute bottom-0 start-10 text-white">
                                                        <h4 class="card-title d-flex justify-content-center">Fish Meat</h4>
                                                        <div className="ShopBtn d-flex justify-content-center"> <a href="#" class="btn ">shop Now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 p-2">
                                                <div class="cat-card card position-relative hidden">
                                                    <img src="imgs/meat-2.jpg" class="card-img-top" alt="..." />
                                                    <div className="offer">
                                                        <h3>50
                                                            <span className='fs-5 d-flex flex-column pt-3'>
                                                                <small>%</small>
                                                                <small>OFF</small>
                                                            </span>
                                                        </h3>
                                                    </div>
                                                    <div class="cat-body card-body position-absolute bottom-0 start-10 text-white">
                                                        <h4 class="card-title d-flex justify-content-center">Fresh Meat</h4>
                                                        <div className="ShopBtn d-flex justify-content-center"> <a href="#" class="btn ">shop Now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">  <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                                            <div className="col-12 col-sm-6 p-2">
                                                <div class="cat-card card position-relative hidden">
                                                    <img src="imgs/vage-1.jpg" class="card-img-top" alt="..." />
                                                    <div className="offer">
                                                        <h3>50
                                                            <span className='fs-5 d-flex flex-column pt-3'>
                                                                <small>%</small>
                                                                <small>OFF</small>
                                                            </span>
                                                        </h3>
                                                    </div>
                                                    <div class="cat-body card-body position-absolute bottom-0 start-10 text-white">
                                                        <h4 class="card-title d-flex justify-content-center">Coriander</h4>
                                                        <div className="ShopBtn d-flex justify-content-center"> <a href="#" class="btn ">shop Now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 p-2">
                                                <div class="cat-card card position-relative hidden">
                                                    <img src="imgs/vag-2.jpg" class="card-img-top" alt="..." />
                                                    <div className="offer">
                                                        <h3>50
                                                            <span className='fs-5 d-flex flex-column pt-3'>
                                                                <small>%</small>
                                                                <small>OFF</small>
                                                            </span>
                                                        </h3>
                                                    </div>
                                                    <div class="cat-body card-body position-absolute bottom-0 start-10 text-white">
                                                        <h4 class="card-title d-flex justify-content-center">
                                                            Broccoli</h4>
                                                        <div className="ShopBtn d-flex justify-content-center"> <a href="#" class="btn ">shop Now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0"> 
                                         <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                                            <div className="col-12 col-sm-6 p-2">
                                                <div class="cat-card card position-relative hidden">
                                                    <img src="imgs/Apple.jpg" class="card-img-top" alt="..." />
                                                    <div className="offer">
                                                        <h3>50
                                                            <span className='fs-5 d-flex flex-column pt-3'>
                                                                <small>%</small>
                                                                <small>OFF</small>
                                                            </span>
                                                        </h3>
                                                    </div>
                                                    <div class="cat-body card-body position-absolute bottom-0 start-10 text-white">
                                                        <h4 class="card-title d-flex justify-content-center">Apple</h4>
                                                        <div className="ShopBtn d-flex justify-content-center"> <a href="#" class="btn ">shop Now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 p-2">
                                                <div class="cat-card card position-relative hidden">
                                                    <img src="imgs/mango.jpg" class="card-img-top" alt="..." />
                                                    <div className="offer">
                                                        <h3>50
                                                            <span className='fs-5 d-flex flex-column pt-3'>
                                                                <small>%</small>
                                                                <small>OFF</small>
                                                            </span>
                                                        </h3>
                                                    </div>
                                                    <div class="cat-body card-body position-absolute bottom-0 start-10 text-white">
                                                        <h4 class="card-title d-flex justify-content-center">Mango</h4>
                                                        <div className="ShopBtn d-flex justify-content-center"> <a href="#" class="btn ">shop Now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                                              <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                                            <div className="col-12 col-sm-6 p-2">
                                                <div class="cat-card card position-relative hidden">
                                                    <img src="imgs/strawberry-1.jpg" class="card-img-top" alt="..." />
                                                    <div className="offer">
                                                        <h3>50
                                                            <span className='fs-5 d-flex flex-column pt-3'>
                                                                <small>%</small>
                                                                <small>OFF</small>
                                                            </span>
                                                        </h3>
                                                    </div>
                                                    <div class="cat-body card-body position-absolute bottom-0 start-10 text-white">
                                                        <h4 class="card-title d-flex justify-content-center">Strawberry</h4>
                                                        <div className="ShopBtn d-flex justify-content-center"> <a href="#" class="btn ">shop Now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 p-2">
                                                <div class="cat-card card position-relative hidden">
                                                    <img src="imgs/strawberry-2.jpg" class="card-img-top" alt="..." />
                                                    <div className="offer">
                                                        <h3>50
                                                            <span className='fs-5 d-flex flex-column pt-3'>
                                                                <small>%</small>
                                                                <small>OFF</small>
                                                            </span>
                                                        </h3>
                                                    </div>
                                                    <div class="cat-body card-body position-absolute bottom-0 start-10 text-white">
                                                        <h4 class="card-title d-flex justify-content-center">Strawberry</h4>
                                                        <div className="ShopBtn d-flex justify-content-center"> <a href="#" class="btn ">shop Now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagory
