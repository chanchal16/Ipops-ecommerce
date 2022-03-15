import React,{useState,createContext,useContext,useReducer} from 'react'
import { CartReducer } from '../reducers/CartReducer';

const cartContext = createContext();

function CartContextProvider({children}) {
  const[state,dispatch]= useReducer(CartReducer,{cart:[],totalPrice:0,totalItems:0})

  return (
    <div>
        <cartContext.Provider value={{state,dispatch}}>
            {children}
        </cartContext.Provider>
    </div>
  )
}
const useCart = ()=> useContext(cartContext);
export {CartContextProvider, useCart}