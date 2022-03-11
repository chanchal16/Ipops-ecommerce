import React from 'react'
import { useFilter } from '../contexts/filterContext'

export default function Sidebar() {
    const {state,dispatch} = useFilter()
  return (
    <div>
         <aside>
            <div class="sidebar">
                <span class="h6 sidebar-heading">Filters</span>
                <div class="filters">
                    <p class="text-md">Price</p>
                    <input type="range" min="800" max="2000" value={state.price} 
                    class="--slider accent" id="myRange" 
                    onChange={(e) => dispatch({ type: "PRICE", payload: e.target.value })} />
                </div>
                {/* ---categories-- */}
                <div class="filters">
                    <p class="text-md">Category</p>
                    <label class="text-sm accent" for="checkbox">
                        <input type="checkbox" name="category" /> All </label> 
                    <p class="text-sm accent">
                        <input type="checkbox" name="category" value='eye-glasses' onClick={(e)=>dispatch({type:'EYEGLASSES'})}/>
                         Eye-glasses </p> 
                    <p class="text-sm accent">
                        <input type="checkbox" name="category" value='computer-glasses' onClick={(e)=>dispatch({type:'COMPUTERGLASSES'})} />
                         Computer-glasses </p>
                    <p class="text-sm accent">
                        <input type="checkbox" name="category" value='sun-glasses' onClick={(e)=>dispatch({type:'SUNGLASSES'})} />
                         Sunglasses </p>
                </div>
                {/* <!---ratings----> */}
                <div class="filters">
                    <p class="text-md">Ratings</p>
                    <p class="text-sm accent" for="radio">
                        <input type="radio" name="rating" />
                         4<i class="fas fa-star fa-xs"></i> & above 
                    </p> 
                    <p class="text-sm accent" for="radio">
                        <input type="radio" name="rating" />
                         3<i class="fas fa-star fa-xs"></i> & above
                    </p> 
                    <p class="text-sm accent" for="radio">
                        <input type="radio" name="rating" /> 
                        2<i class="fas fa-star fa-xs"></i> & above 
                    </p>
                    <p class="text-sm accent" for="radio">
                        <input type="radio" name="rating" /> 
                        1<i class="fas fa-star fa-xs"></i> & above 
                    </p>
                </div>
            </div>
        </aside>
    </div>
  )
}
