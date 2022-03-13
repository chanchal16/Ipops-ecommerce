const WishlistReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_WISHLIST':
            return {...state, wishlist:state.wishlist.concat(action.payload)};
        case 'REMOVE_FROM_WISHLIST':
            return {...state, wishlist:state.wishlist.filter((item) => item.id !== action.payload.id)};
        default:
            return state;
    }

}
export {WishlistReducer}