import axios from './axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const ProductContext=createContext()

const Context = ({children}) => {
    const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products"))|| null)
    const getproducts = async ()=>{
        try {
            let {data}= await axios("/products")
            
            
            setproducts(data)
            
        } catch (error) {

            console.log(error)
            
        }
    }

    useEffect(() => {
      if (products==null){
        getproducts()
        
      }
    }, [])
    
    console.log(products)

  return (
    <ProductContext.Provider value={[products, setproducts]} >
        {children}
    </ProductContext.Provider>
    
  )
}

export default Context
