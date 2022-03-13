import React,{useEffect,useState} from 'react';
import Sidebar from '../components/sidebar';
import { useWishlist } from '../contexts/WishlistContext';
import { products } from '../store/products';

export default function Products() {
    const {state,dispatch} = useWishlist()
    const [isWishlisted,setIsWishlisted] = useState(false)
    // console.log('wishlist',state)

    useEffect(() => {
        const found = state.wishlist?.find((ele) => ele.id === product.id);
        setIsWishlisted(found)
        
    }, [])
    
    const addToWishlist = (product)=>{   
        if(isWishlisted){
            dispatch({type:'REMOVE_FROM_WISHLIST', payload:product})
        }else{
            dispatch({type:'ADD_TO_WISHLIST',payload:product})
        }
        setIsWishlisted(!isWishlisted)
    }
  return (
    <div className="main-container">
        <Sidebar/>
        <section>
            <div className='product-list'>
            {
            products.map(product=>(
                <div className="card">
                    <div className="card-media">
                        <img className="vc-image" 
                        src={product.img} 
                        alt="specs" loading="lazy" />
                        <span className="text-badge">new</span>
                    </div>
                    <div className="card-content">
                        <div className="content-title">
                            <h4>{product.name}</h4>
                            <span className=" gray" onClick={()=>addToWishlist(product)}>
                            {/* <i className="far fa-heart "></i> */}
                                {isWishlisted ?<i className="fas fa-heart "></i>: <i className="far fa-heart "></i>} 
                            </span>
                        </div>
                        <div className="desc">
                            <p className="desc-title">Eyeglasses</p>
                            <p><strong> {product.price} </strong> <span className="strike-text gray">Rs.999
                                </span> <span className="secondary">20% off</span></p>
                        </div>
                        <div className="action-btns">
                            <button className="btn" >
                                <i className="fas fa-shopping-cart"></i> Add to cart
                            </button>
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
