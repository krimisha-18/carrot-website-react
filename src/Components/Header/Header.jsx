import React from 'react'
import './Header.css'
// search
import { IoSearch } from "react-icons/io5";
// User
import { FaRegUser } from "react-icons/fa";
// heart
import { FaRegHeart } from "react-icons/fa";
// cart
import { BsCart3 } from "react-icons/bs";
// manubar
import { FaBarsStaggered } from "react-icons/fa6";
// phone
import { MdLocalPhone } from "react-icons/md";
// down errow 
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            {/* navbar */}
            <div className="container">
                <div className="row">
                    <div className="nav p-3 d-flex flex-wrap">
                        <div className="col-12 col-md-6 col-lg-3 pb-3">
                            <div className="logo d-flex justify-content-center justify-content-xl-start ">
                                <img src="imgs/logo.png" alt="" />
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 col-lg-4">
                            <div className="search-box">
                                <input type="text" className=" w-100 ps-3" placeholder="Search For items..." />
                                <div class="dropdown d-none d-sm-flex " border={0}>
                                    <button class="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        All catagories
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="search-icon fs-5">
                                    <span><IoSearch /></span>
                                </div>

                            </div>
                        </div>
                        <div className="col-5 d-none d-lg-flex ">
                            <div className="cart-bar w-100 d-flex justify-content-end align-items-center fw-700 fs-5">
                                <ul className='d-flex align-items-center'>
                                    <li>
                                        <div class="dropdown">
                                            <span className='me-2'><FaRegUser /></span>
                                            <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                account
                                            </a>
                                            <ul class="dropdown-menu mt-3 shadow bg-white">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#">
                                        <span className='me-2'><FaRegHeart /></span>
                                        wishlist</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className='me-2'> <BsCart3 /></span>
                                            cart</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* header */}
                    <div className="header p-3 d-flex align-items-center fw-bold">
                        <div className="col-12 d-flex">
                            <div className="col-6 col-lg-2">
                                <div className="catagory-manu">
                                    <button className='btn'><a href="#"><FaBarsStaggered /></a>
                                        <div class="drop-down-h d-none d-lg-flex">
                                            <div className="col-12">
                                                <div class="catagory-m d-flex flex-wrap flex-start ">
                                                    <div className="col-12 col-lg-5">
                                                        <div class="nav flex-column nav-pills me-3 w-50 pt-2 w-100 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                            <div className="col-12 d-flex flex-wrap">
                                                                <div className="col-12  col-sm-6 col-lg-12 mb-2">
                                                                    <button class="nav-link active p-2 w-100" id="v-pills-dairy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dairy" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><h6>
                                                                        Dairy & Bakery</h6>
                                                                    </button>
                                                                </div>
                                                                <div className="col-12  col-sm-6 col-lg-12 mb-2">
                                                                    <button class="nav-link p-2 w-100" id="v-pills-fruits-tab" data-bs-toggle="pill" data-bs-target="#v-pills-fruits" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><h6>
                                                                        Fruits & Vegetable</h6>
                                                                    </button>
                                                                </div>
                                                                <div className="col-12  col-sm-6 col-lg-12 mb-2">
                                                                    <button class="nav-link p-2 w-100" id="v-pills-snecks-tab" data-bs-toggle="pill" data-bs-target="#v-pills-snecks" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false"><h6>
                                                                        Snack & Spice</h6>
                                                                    </button>
                                                                </div>
                                                                <div className="col-12  col-sm-6 col-lg-12 mb-2">
                                                                    <button class="nav-link p-2 w-100" id="v-pills-juice-tab" data-bs-toggle="pill" data-bs-target="#v-pills-juice" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><h6>
                                                                        Juice & Drinks </h6>
                                                                    </button>
                                                                </div>
                                                                <div className="col-12  col-sm-6 col-lg-12 mb-2">
                                                                    <button class="nav-link p-2 w-100" id="v-pills-view-tab" data-bs-toggle="pill" data-bs-target="#v-pills-view" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><h6>
                                                                        View All </h6>
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-lg-7">
                                                        <div class="tab-content" id="v-pills-tabContent">
                                                            <div class="tab-pane fade show active w-100" id="v-pills-dairy" role="tabpanel" aria-labelledby="v-pills-dairy-tab" tabindex="0">
                                                                <div className="col-12 d-flex flex-wrap flex-start">
                                                                    <div className="col-12 col-sm-6 p-2">
                                                                        <div className="cat-list ">
                                                                            <h6>Dairy</h6>
                                                                            <ul className='d-flex flex-column'>
                                                                                <li><a href="#">Milk</a></li>
                                                                                <li><a href="#">Ice Cream</a></li>
                                                                                <li><a href="#">Cheese</a></li>
                                                                                <li><a href="#">Frozen
                                                                                    custard</a></li>
                                                                                <li><a href="#">Frozen
                                                                                    yogurt</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-6 p-2">
                                                                        <div className="cat-list">
                                                                            <h6>Bakery</h6>
                                                                            <ul className='d-flex flex-column'>
                                                                                <li><a href="#">Cake and
                                                                                    Pastry</a></li>
                                                                                <li><a href="#">Rusk Toast</a></li>
                                                                                <li><a href="#">Bread &
                                                                                    Buns</a></li>
                                                                                <li><a href="#">Chocolate
                                                                                    Brownie</a></li>
                                                                                <li><a href="#">Cream Roll</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="v-pills-fruits" role="tabpanel" aria-labelledby="v-pills-fruits-tab" tabindex="0">  <div className="col-12 d-flex flex-wrap align-items-center">
                                                                <div className="col-12 col-sm-6 p-2">
                                                                    <div className="cat-list">
                                                                        <h6>Fruits</h6>
                                                                        <ul className='d-flex flex-column'>
                                                                            <li><a href="#">Cauliflower
                                                                            </a></li>
                                                                            <li><a href="#">Bell
                                                                                Peppers </a></li>
                                                                            <li><a href="#">Broccoli
                                                                            </a></li>
                                                                            <li><a href="#">Cabbage
                                                                            </a></li>
                                                                            <li><a href="#">Tomato </a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-6 p-2">
                                                                    <div className="cat-list">
                                                                        <h6>Vegetable</h6>
                                                                        <ul className='d-flex flex-column'>
                                                                            <li><a href="#">Cauliflower
                                                                            </a></li>
                                                                            <li><a href="#">Bell
                                                                                Peppers </a></li>
                                                                            <li><a href="#">Broccoli
                                                                            </a></li>
                                                                            <li><a href="#">Cabbage
                                                                            </a></li>
                                                                            <li><a href="#">Tomato </a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="v-pills-snecks" role="tabpanel" aria-labelledby="v-pills-snecks-tab" tabindex="0">  <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                                                                <div className="col-12 col-sm-6 p-2">
                                                                    <div className="cat-list">
                                                                        <h6>Snacks</h6>
                                                                        <ul className='d-flex flex-column'>
                                                                            <li><a href="#">French
                                                                                fries </a></li>
                                                                            <li><a href="#">potato
                                                                                chips </a></li>
                                                                            <li><a href="#">Biscuits &
                                                                                Cookies</a></li>
                                                                            <li><a href="#">Popcorn
                                                                            </a></li>
                                                                            <li><a href="#">Rice Cakes</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-6 p-2">
                                                                    <div className="cat-list">
                                                                        <h6>Spice</h6>
                                                                        <ul className='d-flex flex-column'>
                                                                            <li><a href="#">Cinnamon
                                                                                Powder</a></li>
                                                                            <li><a href="#">Cumin
                                                                                Powder</a></li>
                                                                            <li><a href="#">Fenugreek
                                                                                Powder </a></li>
                                                                            <li><a href="#">Pepper
                                                                                Powder</a></li>
                                                                            <li><a href="#">Long Pepper</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="v-pills-juice" role="tabpanel" aria-labelledby="v-pills-juice-tab" tabindex="0">
                                                                <div className="col-12 d-flex flex-wrap ">
                                                                    <div className="col-12 col-sm-6 p-2">
                                                                        <div className="cat-list">
                                                                            <h6>Juice</h6>
                                                                            <ul className='d-flex flex-column'>
                                                                                <li><a href="#">Mango Juice</a></li>
                                                                                <li><a href="#">Coconut
                                                                                    Water</a></li>
                                                                                <li><a href="#">Tetra Pack</a></li>
                                                                                <li><a href="#">Apple
                                                                                    Juices</a></li>
                                                                                <li><a href="#">Lychee
                                                                                    Juice</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-6 p-2">
                                                                        <div className="cat-list">
                                                                            <h6>soft drink</h6>
                                                                            <ul className='d-flex flex-column'>
                                                                                <li><a href="#">Breizh Cola</a></li>
                                                                                <li><a href="#">Green Cola</a></li>
                                                                                <li><a href="#">Jolt Cola</a></li>
                                                                                <li><a href="#">Mecca Cola</a></li>
                                                                                <li><a href="#">Topsia Cola</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="v-pills-view" role="tabpanel" aria-labelledby="v-pills-view-tab" tabindex="0">
                                                                <div className="col-12 d-flex flex-wrap">
                                                                    <div className="col-12 col-sm-6 p-2">
                                                                        <div className="cat-list">
                                                                            <h6>Bakery</h6>
                                                                            <ul className='d-flex flex-column'>
                                                                                <li><a href="#">Cake and
                                                                                    Pastry</a></li>
                                                                                <li><a href="#">Rusk Toast</a></li>
                                                                                <li><a href="#">Bread &
                                                                                    Buns</a></li>
                                                                                <li><a href="#">Chocolate
                                                                                    Brownie</a></li>
                                                                                <li><a href="#">Cream Roll</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-6 p-2">
                                                                        <div className="cat-list">
                                                                            <h4>Bakery</h4>
                                                                            <ul className='d-flex flex-column'>
                                                                                <li><a href="#">Cake and
                                                                                    Pastry</a></li>
                                                                                <li><a href="#">Rusk Toast</a></li>
                                                                                <li><a href="#">Bread &
                                                                                    Buns</a></li>
                                                                                <li><a href="#">Chocolate
                                                                                    Brownie</a></li>
                                                                                <li><a href="#">Cream Roll</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="col-6 col-lg-10 col-xl-6 d-flex align-items-center">
                                <div className="manu d-flex justify-content-end  w-100 d-none d-lg-flex">
                                    <ul>
                                        <li><a href="#">Home</a>

                                        </li>
                                        <li><a href="#">Catagory <FaAngleDown /></a>
                                            <div class="drop-down-h ">
                                                <ul className='d-flex flex-column p-0 m-o'>
                                                    <li>
                                                        <a href="#" >Shop Left sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Shop Right sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Full Width</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Product <FaAngleDown /></a>
                                            <div class="drop-down-h ">
                                                <ul className='d-flex flex-column p-0 m-o'>
                                                    <li>
                                                        <a href="#" >Product Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Product Right Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Product Full Width</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Pages <FaAngleDown /></a>
                                            <div class="drop-down-h ">
                                                <ul className='d-flex flex-column p-0 m-o'>
                                                    <li>
                                                        <a href="#" >About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Contact Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Track Order</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Wishlist</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Faq</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Policy</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Bloge <FaAngleDown /></a>
                                            <div class="drop-down-h ">
                                                <ul className='d-flex flex-column p-0 m-o'>
                                                    <li>
                                                        <a href="#" >Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Right Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Full Width</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Detail Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Detail Right Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Detail Full Width</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Element <FaAngleDown /></a>
                                            <div class="drop-down-h ">
                                                <ul className='d-flex flex-column p-0 m-o'>
                                                    <li>
                                                        <a href="#" >Products</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" > Typography</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Buttons</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div className="cart-bar w-100 d-flex justify-content-end align-items-center fw-700 fs-5 d-flex d-lg-none">
                                    <ul className='d-flex align-items-center p-0 justify-content-end w-100'>
                                        <li><a href="#">
                                            <span className='me-2'><FaRegUser /></span>
                                        </a></li>
                                        <li><a href="#">
                                            <span className='me-2'><FaRegHeart /></span>
                                        </a></li>

                                        <li><a href="#">
                                            <span className='me-2'> <BsCart3 /></span>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 d-flex align-items-center justify-content-end d-none d-xl-flex">
                                <div className="contect
                        "><span className='fs-5 m-2'><MdLocalPhone /></span>+123 ( 456 ) ( 7890 )</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
