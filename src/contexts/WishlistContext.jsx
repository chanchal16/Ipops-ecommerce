import React,{useState,createContext,useContext} from 'react'

const wishlistContext = createContext()

 function WishlistContextProvider({children}) {
    const [wishlist,setWishlist] = useState([])

    const addToWishlist = (product)=>{
        const found = wishlist?.find((ele) => ele.id === product.id);
        if(found){
            return setWishlist([...wishlist])
        }else{
           return setWishlist([...wishlist,product])
        }
    }
    
  return (
    <div>
        <wishlistContext.Provider value={{wishlist,addToWishlist}}>
            {children}
        </wishlistContext.Provider>
    </div>
  )
}
const useWishlist =()=> useContext(wishlistContext)
export{WishlistContextProvider,useWishlist}