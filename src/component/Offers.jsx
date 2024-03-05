import React from 'react'
import "./Offers.css"
function Offers() {
    return (
        <>
            <div className='offers'>
                <div className='offer-1'>
                    <h3>Adidas Shoes</h3>
                    <h1>The Summer Sale <br />Off 50%</h1>
                    <button>Shop Now </button>
                </div>
                <div className='offer-2'>
                    <h3>Nike Shoes</h3>
                    <h1>Makes Yourself <br />Keep Sporty</h1>
                    <button>Shop Now </button>
                </div>
            </div>

            <div className='services'>
                <ul>
                    <li>
                        <div className="img-div">
                            <img src="https://glitch-io.github.io/EcommWebsite/img/service-1.png" alt="" />
                        </div>
                        <div className="service-name">
                            <h2>FREE SHIPING</h2>
                            <p>All orders over $150</p>
                        </div>
                    </li>
                    <li>
                        <div className="img-div">
                            <img src="https://glitch-io.github.io/EcommWebsite/img/service-2.png" alt="" />
                        </div>
                        <div className="service-name">
                            <h2>QUICK PAYMENT
                            </h2>
                            <p>100% secure payment</p>
                        </div>
                    </li>
                    <li>
                        <div className="img-div">
                            <img src="https://glitch-io.github.io/EcommWebsite/img/service-3.png" alt="" />
                        </div>
                        <div className="service-name">
                            <h2>FREE RETURNS
                            </h2>
                            <p>Money back in 30 days</p>
                        </div>
                    </li>
                    <li>
                        <div className="img-div">
                            <img src="https://glitch-io.github.io/EcommWebsite/img/service-4.png" alt="" />
                        </div>
                        <div className="service-name">
                            <h2>24/7 SUPPORT
                            </h2>
                            <p>Get Quick Support</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Offers