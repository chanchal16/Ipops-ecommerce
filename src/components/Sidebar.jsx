import React from 'react'

export default function Sidebar() {
  return (
    <div>
         <aside>
            <div class="sidebar">
                <span class="h6 sidebar-heading">Filters</span>
                <div class="filters">
                    <p class="text-md">Price</p>
                    <input type="range" min="100" max="1000" value="500" 
                    class="--slider accent" id="myRange"/>
                </div>
                {/* ---categories-- */}
                <div class="filters">
                    <p class="text-md">Category</p>
                    <label class="text-sm accent" for="checkbox">
                        <input type="checkbox" name="category" /> All </label> 
                    <p class="text-sm accent">
                        <input type="checkbox" name="category" /> Eye-glasses </p> 
                    <p class="text-sm accent">
                        <input type="checkbox" name="category" /> Computer-glasses </p>
                    <p class="text-sm accent">
                        <input type="checkbox" name="category" /> Sunglasses </p>
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
