import { useState } from "react"
import AddProduct from "../components/AddProduct"
import Button from "../components/Button"
import CardTotal from "../components/CardTotal"
import ProductCard from "../components/ProductCard"


const Main = ({data}) => {
  
  return (
    <div>
        {data.map((item)=>{
          return (<ProductCard key={item.id} {...item}/>)
      })}
     
    </div>
  )
}

export default Main
