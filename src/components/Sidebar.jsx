import React from 'react'

export default function Sidebar() {
  return (
    <div>
         <aside>
            <div className="sidebar">
                <span className="h6 sidebar-heading">Filters</span>
                <div className="filters">
                    <p className="text-md">Price</p>
                    <input type="range" min="100" max="1000" value="500" 
                    className="--slider accent" id="myRange" onChange={()=>{}}/>
                </div>
                {/* ---categories-- */}
                <div className="filters">
                    <p className="text-md">Category</p>
                    <label className="text-sm accent" htmlFor="checkbox">
                        <input type="checkbox" name="category" /> All </label> 
                    <p className="text-sm accent">
                        <input type="checkbox" name="category" /> Eye-glasses </p> 
                    <p className="text-sm accent">
                        <input type="checkbox" name="category" /> Computer-glasses </p>
                    <p className="text-sm accent">
                        <input type="checkbox" name="category" /> Sunglasses </p>
                </div>
                {/* <!---ratings----> */}
                <div className="filters">
                    <p className="text-md">Ratings</p>
                    <p className="text-sm accent" htmlFor="radio">
                        <input type="radio" name="rating" />
                         4<i className="fas fa-star fa-xs"></i> & above 
                    </p> 
                    <p className="text-sm accent" htmlFor="radio">
                        <input type="radio" name="rating" />
                         3<i className="fas fa-star fa-xs"></i> & above
                    </p> 
                    <p className="text-sm accent" htmlFor="radio">
                        <input type="radio" name="rating" /> 
                        2<i className="fas fa-star fa-xs"></i> & above 
                    </p>
                    <p className="text-sm accent" htmlFor="radio">
                        <input type="radio" name="rating" /> 
                        1<i className="fas fa-star fa-xs"></i> & above 
                    </p>
                </div>
            </div>
        </aside>
    </div>
  )
}
