import React from 'react';
import Sidebar from '../components/sidebar';
import { useCart } from '../contexts/CartContext';
import { products } from '../store/products';
import { ItemExists } from '../store/ItemExists';
import { Link } from "react-router-dom";

export default function Products() {
    const{state,dispatch} = useCart()
    console.log('state',state)

    const addToCart=(item)=>{
        // const found = state.cart?.find((ele) => ele.id === item.id);
        // console.log("found", found);
        
        if(!ItemExists(state.cart,item.id)){
            item.qty = 1;
            dispatch({type:'ADD_TO_CART',payload:item})
        }
        
        console.log('qty',state)
    }
  return (
    <div className="main-container">
        <Sidebar/>
        <section>
            <div className='product-list'>
            {
            products.map(product=>(
                <div class="card" key={product.id}>
                    <div class="card-media">
                        <img class="vc-image" 
                        src={product.img} 
                        alt="specs" loading="lazy" />
                        <span class="text-badge">new</span>
                    </div>
                    <div class="card-content">
                        <div class="content-title">
                            <h4>{product.name}</h4>
                            <span class=" gray">
                                <i class="far fa-heart "></i>
                            </span>
                        </div>
                        <div class="desc">
                            <p class="desc-title">Eyeglasses</p>
                            <p><strong> {product.price} </strong> <span class="strike-text gray">Rs.999
                                </span> <span class="secondary">20% off</span></p>
                        </div>
                        <div class="action-btns">
                            {ItemExists(state.cart,product.id) ?
                            <Link to='/cart'>
                                <button class="btn" >
                                    <i class="fas fa-shopping-cart"></i> Go to cart
                                </button>
                            </Link>
                            
                            : 
                            <button class="btn" onClick={()=>addToCart(product)}>
                                <i class="fas fa-shopping-cart"></i> Add to cart
                            </button>
                            }
                        </div>
                    </div>
                </div>
            ))  
            }
            </div>
        </section>
    </div>
  )
}
