import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";
import { products } from "../store/products";

const filterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, products);
  console.log("state", state);
 
  return (
    <filterContext.Provider value={{ state, dispatch }}>
      {children}
    </filterContext.Provider>
  );
};
const useFilter = () => useContext(filterContext);
export { FilterProvider, useFilter };
