import React, { useState } from 'react'
import './footer.css'
import { ContectUs, Company, Catagory, payImg } from './Footer-Data';

// facebook
import { RiFacebookLine } from "react-icons/ri";
// twitter
import { RiTwitterXLine } from "react-icons/ri";
// deibell
import { FaDribbble } from "react-icons/fa6";
// insta
import { RxInstagramLogo } from "react-icons/rx";


const Footer = () => {
    const [contect, setContect] = useState(ContectUs)
    const [comp, setComp] = useState(Company)
    const [catagory, setCatagory] = useState(Catagory)
    const [pay, stPay] = useState(payImg)
    return (
        <>
            <footer className='footer py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className="f-top d-flex flex-wrap py-5">
                            <div className='col-12 col-lg-4 d-none d-lg-flex px-3'>
                                {
                                    contect.map((cnt) => {
                                        return (
                                            <div className="fl" key={cnt.id}>
                                                <div className="f-logo">
                                                    <div className="f-img">
                                                        <img src={cnt.logo} alt="" />
                                                    </div>
                                                    <p className='py-3 fs-6'>{cnt.dis}</p>

                                                </div>
                                                <div className="location">
                                                    <ul className='d-flex flex-column'>
                                                        <li>
                                                            {cnt.adress}
                                                        </li>
                                                        <li>
                                                            <a href="#">{cnt.email}</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">{cnt.phone}</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="col-12 col-lg-4 px-3 d-lg-none d-flex w-100">
                                {
                                    contect.map((cnt) => {
                                        return (
                                            <div className="fl w-100" key={cnt.id}>
                                                <div className="f-logo">
                                                    <div className="f-img">
                                                        <img src={cnt.logo} alt="" />
                                                    </div>
                                                    <p className='py-3 fs-6'>{cnt.dis}</p>

                                                </div>
                                                <div class="accordion w-100" id="accordionPanelsStayOpenExample">
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                                Contect us
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                            <div class="accordion-body">
                                                                <div className="location">
                                                                    <ul className='d-flex flex-column'>
                                                                        <li>
                                                                            {cnt.adress}
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">{cnt.email}</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">{cnt.phone}</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* company */}
                            <div className='col-12 col-lg-2 d-none d-lg-flex  px-3'>
                                <div className="f-main ">
                                    <div className="f-title pt-3">
                                        <h4>Company</h4>
                                    </div>
                                    <ul className='f-list d-flex flex-column'>
                                        {
                                            comp.map((cmp) => {
                                                return (
                                                    <li key={cmp.id}><a href="#">{cmp.list}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>
                            <div className='col-12 col-lg-2 d-lg-none d-flex p-3'>
                                <div class="accordion w-100" id="accordionPanelsStayOpenExample">

                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Company
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                            <div class="accordion-body">
                                                <ul className='f-list d-flex flex-column'>
                                                    {
                                                        comp.map((cmp) => {
                                                            return (
                                                                <li key={cmp.id}><a href="#">{cmp.list}</a></li>
                                                            )
                                                        })
                                                    }
                                                </ul>                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* catagoty */}
                            <div className='col-12 col-lg-2  d-none d-lg-flex  px-3'>
                                <div className="f-main">
                                    <div className="f-title pt-3">
                                        <h4>Catagory</h4>
                                    </div>
                                    <ul className='f-list d-flex flex-column'>
                                        {
                                            catagory.map((cat) => {
                                                return (
                                                    <li key={cat.id}><a href="#">{cat.list}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-lg-2 d-lg-none d-flex p-3 '>
                                <div class="accordion w-100" id="accordionPanelsStayOpenExample">

                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Catagory
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                            <div class="accordion-body">
                                                <ul className='f-list d-flex flex-column'>
                                                    {
                                                        catagory.map((cat) => {
                                                            return (
                                                                <li key={cat.id}><a href="#">{cat.list}</a></li>
                                                            )
                                                        })
                                                    }
                                                </ul>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* subscribe */}
                            <div className='col-12 col-lg-4  px-3'>
                                <div className="f-main">
                                    <div className="f-title pt-3">
                                        <h4>Subscribe Our Newsletter</h4>
                                    </div>
                                    <div className="search py-2">
                                        <form class="d-flex" role="search w-100">
                                            <input class="form-control w-100" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn  " type="submit">Search</button>
                                        </form>
                                    </div>
                                    <div className="social pt-4">
                                        <span><RiFacebookLine /></span>
                                        <span><RiTwitterXLine /></span>
                                        <span><FaDribbble /></span>
                                        <span><RxInstagramLogo /></span>

                                    </div>
                                    <div className="payment pt-4 d-flex">
                                        {
                                            pay.map((pay) => {
                                                return (
                                                    <div className="pay-img p-2" key={pay.id}>
                                                        <img src={pay.img} className='img-fluid' alt="" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="f-bottom text-center pt-4">
                            <p>
                                ©
                                <span> 2024</span>
                                <a href="#"> Carrot</a>
                                , All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>


            </footer>
        </>
    )
}

export default Footer
