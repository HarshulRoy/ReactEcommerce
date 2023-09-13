import React, { useContext,createContext } from 'react'
import axios from 'axios'
import reducer from '../reducer/productReducer'

const AppContext = createContext()

const initialState={
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({children}) => {
    const API = 'https://api.pujakaitem.com/api/products'

    const [state, dispatch] = React.useReducer(reducer, initialState);


    const getProducts = async (url)=>{
        dispatch({type: "SET_LOADING"})
        try{
          
        const res = await axios.get(url);
        const products = await res.data;
        dispatch({ type: "SET_API_DATA", payload: products})
        } catch(error){
            dispatch({type: "API_ERROR"})
        }
    }

    // My second api call fro single product 

    const getSingleProduct = async(url) => {
      dispatch({type: "SET_SINGLE_LOADING"});
      try{
        const res = await axios.get(url);
        const singleProduct = await res.data; 
        dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct})
        
      } catch (error){
        dispatch({ type: "SET_SINGLE_ERROR"})
      }
    }
 
    React.useEffect(()=>{
        getProducts(API);
    },[])

  return (
    <AppContext.Provider value={{...state, getSingleProduct}}>
      {children}
    </AppContext.Provider>
  )
}

// custom hook 
const useProductContext = () =>{
    return useContext(AppContext)
}

export {AppProvider,useProductContext}
