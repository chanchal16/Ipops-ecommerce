const CartReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                 cart:state.cart.concat(action.payload),
                 totalItems: state.totalItems + 1,
                 totalPrice:state.totalPrice + action.payload.price
                };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                 cart:state.cart?.filter(item=>item.id !== action.payload.id),
                 totalItems: state.totalItems - 1,
                 totalPrice:state.totalPrice - action.payload.price
                }
        case 'INCREASE_QTY':
            return {
                ...state,
                cart:state.cart.map((item)=>{
                    return item.id === action.payload.id ? { ...item, qty: item.qty + 1 }  : item
                }),               
                totalPrice:state.totalPrice + action.payload.price
            }
        case 'DECREASE_QTY':
            return {
                ...state,
                cart:state.cart.map((item)=>{
                    return item.id === action.payload.id ? { ...item, qty: item.qty - 1 }  : item
                }),
                totalPrice:state.totalPrice - action.payload.price
            }
    }
}
export{CartReducer}