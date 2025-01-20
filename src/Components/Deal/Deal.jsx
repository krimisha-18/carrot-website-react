import React, { useEffect, useState } from 'react'
import './deal.css'

const Deal = () => {
    const [seconds, setSeconds] = useState(60)

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds === 0) {
                setSeconds(60); // Restart timer when it reaches 0
              } else {
                setSeconds(prevSeconds => prevSeconds - 1);
              }
            }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <>
            <section className='py-5'>
                <div className="deal container-fluid py-150">
                    <div className="row ">
                        <div className="col-12 d-flex justify-content-start ">
                            <div className="deal-content rounded shadow ">
                                <h5>37%<span>OFF</span ></h5>
                                <h3 className='py-2'>Great deal on organic food.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.</p>
                                <div className="timer d-flex py-3 rounded">
                                    <h4 className='d-flex flex-column px-3 text-center '>218 <span className='fs-6'>Days</span></h4> :
                                    <h4 className='d-flex flex-column px-3 text-center '>12 <span className='fs-6'>Hrs</span></h4> :
                                    <h4 className='d-flex flex-column px-3 text-center '>34 <span className='fs-6'>Min</span></h4> :
                                    <h4 className='d-flex flex-column px-3 text-center '> {(seconds)} <span className='fs-6'>Sec</span></h4>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Deal
