import React from 'react'

export default function Cart() {
  return (
    <div className='cart-section'>
        <div className="cart-container">
            <div className="cart-items">
                <div className="items-div">
                    <div className="cart-info">
                        <h6 className="h6">My Cart(1)</h6>
                        <span className="text-md">Deliver to:
                            <input type="text" value="Aurangabad 431001" className="address" />
                        </span>
                    </div>
                    <div className="horizontal-card">
                        <div className="card-media">
                            <img className="hc-image"
                            src="https://cdn.eyemyeye.com/shared/images/products/E20C4254/E20C4254-1-hd.jpg" 
                            alt="specs" />                
                        </div>
                        <div className="content">
                            <h3 className="card-title">Fastrack</h3>
                            <p className="gray card-sub-title">Eyeglasses</p>
                            <p className="gray card-sub-title"><strong> Rs.799 </strong> <span className="strike-text gray">Rs.999
                            </span> <span className="secondary">20% off</span></p>
                            <div className="btns">
                                <a className="link-secondary btn-link">Save for later</a>
                                <a className="link-secondary">Remove</a>
                            </div>
                            <div className="count-div">
                                <button className="quantity-btns">-</button>
                                <input type="text" value="1" className="quantity" />
                                <button className="quantity-btns">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-items-footer">
                        <button className="btn order">Place order</button>
                    </div>
                </div>
            </div>
            <div className="total-price">
                <div className="price-details">
                    <h6 className="h6">Price Details</h6>
                    <hr/>
                    <div className="outer-div">
                        <div className="details">
                            <h1 className="text-md">Price</h1>
                            <p className="text-md">₹999</p>
                        </div>
                        <div className="details">
                            <h1 className="text-md">Discount</h1>
                            <p className=" text-md primary-text">-₹200</p>
                        </div>
                        <div className="details">
                            <h1 className="text-md">Delivery charges</h1>
                            <p className=" text-md">₹50</p>
                        </div>
                    </div>
                    <div className="outer-div">
                        <div className="details">
                            <h1 className="text-md bold">Total amount </h1>
                            <p className=" text-md bold">₹849</p>
                        </div>
                    </div>
                    <div className="details-footer">
                        <p className="text-md info-text">You will save ₹200 on this order</p>                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
