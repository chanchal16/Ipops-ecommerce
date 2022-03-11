import React from 'react';
import Sidebar from '../components/sidebar';
import { useFilter } from '../contexts/filterContext';
import { products } from '../store/products';

export default function Products() {
    const {state,dispatch} = useFilter()
    console.log('state from prod',state)

    const sortPrice = ()=>{
        state.price === 'high'?()=> dispatch({ type: "HIGH_TO_LOW" }): ()=>dispatch({type: "LOW_TO HIGH" })
    }
  return (
    <div className="main-container">
        <Sidebar/>
        <section>
            <div className="sort-div">
                {/*<label htmlFor="sort-items">Sort by:</label>
                <select id="sort-items" name="sort-items" onChange={sortPrice }>
                    <option value="low" >Low to High</option>
                    <option value="high" >High to Low</option>
                </select>*/}
                <input
                type="radio"
                name="radiobtn"
                onClick={() => dispatch({ type: "LOW_TO HIGH" })}
                />
                <label>low to high</label>
                <input
                type="radio"
                name="radiobtn"
                onClick={() => dispatch({ type: "HIGH_TO_LOW" })}
                />
                <label>high to low</label>
            </div>
            {/* <!---product list----> */}
            <div className='product-list'>
            {
            state.map(product=>(
                <div class="card">
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
                            <p class="desc-title">{product.type}</p>
                            <p><strong> {product.price} </strong> <span class="strike-text gray">Rs.999
                                </span> <span class="secondary">20% off</span></p>
                        </div>
                        <div class="action-btns">
                            <button class="btn"><i class="fas fa-shopping-cart"></i> Add to cart</button>
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
