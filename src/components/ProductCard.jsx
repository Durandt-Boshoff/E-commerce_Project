import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import CartIcon from "../assets/icons/Cart-White.svg";

function ProductCard({ product }) {

  const dispatch = useDispatch()

    return (
      <div className="w-full max-w-[180px]">
          {/* Product image */}
        <Link to={`/product/${product.id}`} className="block">
          <div className="bg-white rounded-xl p-[8px] flex items-center justify-center overflow-hidden">

            <img src={product.image} alt={product.name} className="max-w-full max-h-[210px] object-contain"/>

          </div>
        {/* The products information */}

          <div className="mt-[12px]">

            <h2 className="text-[16px] font-medium text-[#1A1F16]">{product.name}</h2>

            <p className="text-[14px] text-[#1A1F1680]"> {product.variant}</p>

            <p className="text-[16px] font-medium text-[#1A1F16]">${product.price.toFixed(2)}</p>
          </div>
        </Link>

          <div className="mt-[12px]">
            <button onClick={() => dispatch(addItem(product))} className="w-[32px] h-[32px] rounded-lg bg-[#1A1F16] flex items-center justify-center">
              <img src={CartIcon} alt="Add to Cart" className="w-[16px] h-[16px]"/>
            </button>
          </div>
      </div>
    );
  } 

export default ProductCard;