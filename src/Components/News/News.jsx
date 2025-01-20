import React from 'react'
import './news.css'
import { NewsSec } from './News-data';
// arrow
import { FaArrowRight } from "react-icons/fa6"; 
const News = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="news-title text-center pb-3">
                                <h1>Latest News</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>

                            </div>
                        </div>
                        <div className="col-12 d-flex flex-wrap justify-content-center">
                           {
                            NewsSec.map((n) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-4 p-2 " key={n.id}>
                                    <div class="news-card card">
                                    
                                        <div class="news-body card-body">
                                            <span>
                                                <small>{n.t1}</small>|
                                                <a href="#">{n.t2}</a>
                                            </span>
                                            <p class="card-text pt-2 fw-bold" style={{color:"#000"}}>{n.content}</p>
                                            <a href="#" class="btn p-0 fw-bold fs-6 ">{n.btn}<span><FaArrowRight /></span>
                                            </a>
                                        </div>
                                        <div className="date py-1 px-3 text-center">
                                            <span className='d-flex flex-column fs-3'>{n.date}
                                                <small className='fs-6'>{n.month}</small>
                                            </span>
                                        </div>
                                       <div className="img">
                                       <img src={n.img} class="card-img-top" alt="..." />
                                   
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

export default News
