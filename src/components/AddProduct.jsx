import { useState } from "react"
import {FaCartPlus} from "react-icons/fa"
import Button2 from "./Button2"

const AddProduct = () => {
  const [button2, setButton2] = useState(true)
  return (
    <div onClick={(e)=> setButton2(!button2)}>
      {button2 ? <Button2/> : null}
    </div>
  )
}

export default AddProduct
