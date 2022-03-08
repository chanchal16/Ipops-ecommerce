import React from 'react';
import Sidebar from '../components/sidebar';
import { products } from '../store/products';

export default function Products() {
  return (
    <div className="main-container">
        <Sidebar/>
        <section>
            <div className='product-list'>
            {
            products.map(product=>(
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
                            <p class="desc-title">Eyeglasses</p>
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
