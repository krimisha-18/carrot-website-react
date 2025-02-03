import React from 'react'
import './servies.css'
// secure Payment
import { RiMoneyDollarBoxLine } from "react-icons/ri";
// packet
import { RiRedPacketLine } from "react-icons/ri";
// customer
import { RiCustomerService2Line } from "react-icons/ri";


const Servies = () => {
  return (
   <>
   <section className='pt-5'>
    <div className="container">
        <div className="row">
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 p-2">
                    <div className="servies p-2 text-center ">
                        <span className='fs-1'><RiMoneyDollarBoxLine /></span>
                        <h4>Payment Secure</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-2">
                    <div className="servies p-2 text-center ">
                        <span className='fs-1'><RiRedPacketLine /></span>
                        <h4>Product Packing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-2">
                    <div className="servies p-2 text-center ">
                        <span className='fs-1'><RiCustomerService2Line /></span>
                        <h4>24X7 Support</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Servies
