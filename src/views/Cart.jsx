import React from 'react'
import { useCart } from '../contexts/CartContext'

export default function Cart() {
    const{state,dispatch} = useCart()
   
    
  return (
    <div className='cart-section'>
        <div className="cart-container">
            <div className="cart-items">
                <div className="items-div">
                    <div className="cart-info">
                        <h6 className="h6">My Cart({state.totalItems})</h6>
                        <span className="text-md">Deliver to:
                            <input type="text" value="Aurangabad 431001" className="address" onChange={()=>{}} />
                        </span>
                    </div>
                    <div className='card-container'>
                    {state.cart?.length>0 && state.cart?.map(item=>(
                        <div className="horizontal-card">
                            <div className="card-media">
                                <img className="hc-image"
                                src={item.img} 
                                alt="specs" />                
                            </div>
                            <div className="content">
                                <h3 className="card-title">{item.name}</h3>
                                <p className="gray card-sub-title">Eyeglasses</p>
                                <p className="gray card-sub-title"><strong> {item.price} </strong> <span className="strike-text gray">Rs.999
                                </span></p>
                                <div className="btns">
                                    <a className="link-secondary btn-link">Save for later</a>
                                    <a className="link-secondary" onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:item})}>Remove</a>
                                </div>
                                <div className="count-div">
                                    <button className="quantity-btns" onClick={()=>dispatch({type:'DECREASE_QTY',payload:item})}>-</button>
                                    <div className='quantity'>{item.qty} </div>
                                    <button className="quantity-btns" onClick={()=>dispatch({type:'INCREASE_QTY',payload:item})}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="cart-items-footer">
                        <button className="btn order">Place order</button>
                    </div>
                </div>
            </div>
            {/* price details */}
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
                            <p className=" text-md bold">{state.totalPrice}</p>
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
