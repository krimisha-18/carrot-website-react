import React from 'react'
import './test.css'
import { Testimonal } from './Test-data';
// star
import { IoMdStar } from "react-icons/io";

const Test = () => {
    return (
        <>
            <section className='pt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pb-3 ">
                            <div className="title text-center">
                                <h1>Great Words From People</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex flex-wrap justify-content-center">
                            {
                                Testimonal.map((test) => {
                                    return (
                                        <div className="col-12 col-md-6 col-lg-4  py-5 px-2" key={test.id}>
                                            <div class="test card text-center">
                                                <div className="test-img">
                                                    <img src={test.img} alt="" />
                                                </div>
                                                <div className="quot">
                                                    <img src={test.qut}alt="" />
                                                </div>
                                                <div class="ard-body">
                                                    <span>{test.position}</span>
                                                    <h5 class="card-title pt-2">{test.name}</h5>
                                                    <p class="card-text py-2">{test.content}</p>
                                                    <div className="star">
                                                        <span className='fs-5'><IoMdStar /></span>
                                                        <span className='fs-5'><IoMdStar /></span>
                                                        <span className='fs-5'><IoMdStar /></span>
                                                        <span className='fs-5'><IoMdStar /></span>
                                                        <span className='fs-5'><IoMdStar /></span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Test
