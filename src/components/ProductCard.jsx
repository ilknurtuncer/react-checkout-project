import { useState } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductCard = ({ id, name, image, price, dampingRate, amount }) => {
    const [count, setCount] = useState(1);
    return (
     
        <div className="container d-flex w-5 border mt-3 shadow">
          <div className="img m-3">
            <img src={image} alt="" style={{ width: "300px" }} />
          </div>
          <div className="w-3">
          <div className="items">
            <h5 className="mt-2">{name} </h5>
            <p>
              <span className="text-warning fs-3">
                ${(price * dampingRate).toFixed(2)} 
              </span>
  
              <span className="text-decoration-line-through fs-3">{price.toFixed(2)}</span>
            </p>
          </div>
        
          <div className="button border p-2 d-flex justify-content-center w-100">
            <button className="m-2"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              {""} <AiOutlinePlus />
              {""}
            </button>
            <span className="m-2">{count}</span>
            <button className="m-2" onClick={() => setCount(count>1?count-1:count=0)}>
                <AiOutlineMinus />
              </button>
          </div>
          <div className="remove mt-4">
              <button type="button" className="btn btn-danger w-100">
                <AiFillDelete />
                Remove
              </button>
            </div>
            <div className="productTotal">
              <p>
                Product Total:$<span>{price * dampingRate}</span>
              </p>
            </div>
        </div>
    </div>
    );
  };
  
  export default ProductCard;
